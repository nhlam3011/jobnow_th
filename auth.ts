import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
        newUser: "/register",
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!user || !user.password) return null;

                const valid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );
                if (!valid) return null;

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email! },
                });
                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            email: user.email!,
                            name: user.name,
                            image: user.image,
                            emailVerified: new Date(),
                        },
                    });
                }
            }
            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.role = (user as { role?: string }).role || "CANDIDATE";
            }
            if (account?.provider === "google" && token.email) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: token.email as string },
                });
                if (dbUser) {
                    token.id = dbUser.id;
                    token.role = dbUser.role;
                }
            }
            return token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        },
    },
});
