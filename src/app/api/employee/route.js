import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ message: "Get Request" });
}

export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "Post" });
}

export async function PUT(request) {
    const body = await request.json();
    return NextResponse.json({ message: "Put" });
}

export async function PATCH(request) {
    const body = await request.json();
    return NextResponse.json({ message: "Patch" });
}

export async function DELETE(request) {
    const body = await request.json();
    return NextResponse.json({ message: "Delete" });
}
