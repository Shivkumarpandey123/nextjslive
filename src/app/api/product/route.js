import { NextResponse } from "next/server";
import DBConnect from "@/app/mongodb/DBConnection";
import Item from "@/app/mongodb/models/item";

export async function GET(request) {
    await DBConnect();
    return NextResponse.json({ message: "Testing API"});
}

export async function POST(request)
{
    const itemData = await request.json();
    console.log(itemData);
    await DBConnect();
    await Item.create(itemData);
    return NextResponse.json({ message: "Post request" });
}