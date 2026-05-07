import { getJobs } from "@/app/actions/jobs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "it";
    
    try {
        const result = await getJobs({ q, limit: 10 });
        return NextResponse.json(result);
    } catch (e: any) {
        return NextResponse.json({ error: e.message });
    }
}
