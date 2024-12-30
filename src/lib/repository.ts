import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export const connectDB = async () => {
  if (!client.isConnected) await client.connect();
  return client.db("cosmic");
};
