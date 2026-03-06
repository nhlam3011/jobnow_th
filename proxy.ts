import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { pathname } = req.nextUrl;

    const protectedPaths = ["/candidate", "/employer", "/admin"];
    const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

    if (isProtected && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Role-based redirect
    if (isLoggedIn && req.auth) {
        const role = req.auth.user?.role;
        if (pathname.startsWith("/admin") && role !== "ADMIN") {
            return NextResponse.redirect(new URL("/", req.url));
        }
        if (pathname.startsWith("/employer") && role !== "EMPLOYER") {
            return NextResponse.redirect(new URL("/", req.url));
        }
        if (pathname.startsWith("/candidate") && role !== "CANDIDATE") {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/candidate/:path*", "/employer/:path*", "/admin/:path*"],
};
