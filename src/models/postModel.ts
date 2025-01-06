import mongoose, { Document, Schema } from "mongoose";

interface Product extends Document {
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
});

const Product = mongoose.model<Product>("Product", productSchema);

export default Product;
