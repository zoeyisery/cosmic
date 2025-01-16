/*import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const globalForMongo = global as unknown as { mongoClient?: MongoClient };

export const connectDB = async () => {
  if (!globalForMongo.mongoClient) {
    globalForMongo.mongoClient = new MongoClient(uri);
    await globalForMongo.mongoClient.connect();
  }
  return globalForMongo.mongoClient.db("cosmic");
};*/

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const globalForMongo = global as unknown as { mongoClient?: MongoClient };

export const connectDB = async () => {
  if (!globalForMongo.mongoClient) {
    // MongoClient 생성 시 더 이상 불필요한 옵션을 제거
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000, // 서버 선택 타임아웃 5초
      socketTimeoutMS: 45000, // 소켓 타임아웃 45초
    });

    try {
      // MongoDB 연결
      await client.connect();
      console.log("MongoDB 연결 성공");
      globalForMongo.mongoClient = client;
    } catch (error) {
      console.error("MongoDB 연결 오류:", error);
      throw new Error("MongoDB 연결에 실패했습니다");
    }
  }

  return globalForMongo.mongoClient.db("cosmic");
};
