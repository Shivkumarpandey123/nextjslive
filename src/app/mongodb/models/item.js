import mongoose,{Schema} from "mongoose";

const ItemSchema = new Schema({
    itemName: String,
    price:Number,
});

const Item = mongoose.models.Item || mongoose.model("Item",ItemSchema);

export default Item;
