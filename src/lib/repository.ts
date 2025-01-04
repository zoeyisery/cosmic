import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const globalForMongo = global as unknown as { mongoClient?: MongoClient };

export const connectDB = async () => {
  if (!globalForMongo.mongoClient) {
    globalForMongo.mongoClient = new MongoClient(uri);
    await globalForMongo.mongoClient.connect();
  }
  return globalForMongo.mongoClient.db("cosmic");
};
