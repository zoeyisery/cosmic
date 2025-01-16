import mongoose, { Document, Schema } from "mongoose";

interface IKeyword extends Document {
  keyword: string;
  products: Schema.Types.ObjectId[];
  createdAt: Date;
}

const keywordSchema: Schema<IKeyword> = new Schema({
  keyword: { type: String, required: true, unique: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createdAt: { type: Date, default: Date.now },
});

const Keyword = mongoose.model<IKeyword>("Keyword", keywordSchema);

export default Keyword;
