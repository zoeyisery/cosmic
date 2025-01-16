import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  keywords: Schema.Types.ObjectId[];
  createdAt: Date;
}

const productSchema: Schema<IProduct> = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  keywords: [{ type: mongoose.Schema.Types.ObjectId, ref: "Keyword" }],
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
