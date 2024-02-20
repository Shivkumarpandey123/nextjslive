"use server";
import DBConnect from "../mongodb/DBConnection";
import Item from "../mongodb/models/item";
import { revalidatePath } from "next/cache";

export default async function ItemEntry(formData) {
    try {
        await DBConnect();
        await Item.create(formData);
       revalidatePath("/product/itementry");
       return { success: true };
    } catch (error) {
        return { success: false};
    }
    
}