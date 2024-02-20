import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ message: "Form Submitted"});
}

export async function POST(request) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({email:body.email});
}