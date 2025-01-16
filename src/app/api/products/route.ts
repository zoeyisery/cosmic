import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/repository";
import Product from "@/models/ProductModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB(); // MongoDB 연결

  if (req.method === "GET") {
    try {
      // MongoDB에서 상품 데이터 가져오기
      const products = await Product.find(); // 'Product' 컬렉션에서 데이터 조회
      res.status(200).json(products); // 데이터 반환
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // GET 이외의 요청 처리
  }
}
