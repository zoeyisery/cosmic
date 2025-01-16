import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
  title: string;
  description: string;
  content?: string;
  product?: Schema.Types.ObjectId;
  keywords: string[];
  author?: string;
  createdAt?: Date;
}

const postSchema: Schema<IPost> = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  keywords: [{ type: String, index: true }],
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default Post;
