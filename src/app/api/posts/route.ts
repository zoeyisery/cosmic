/*import { NextResponse } from "next/server";
import { connectDB } from "@/lib/repository";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  const db = await connectDB();
  const posts = await db
    .collection("posts")
    .find({ keywords: keyword })
    .toArray();

  return NextResponse.json(posts);
}
*/
/*export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  const filteredData = mockData.filter((post) => post.keyword === keyword);
  return NextResponse.json(filteredData);
}
/*export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  const db = await connectDB();
  const posts = await db
    .collection("posts")
    .find({ keywords: keyword })
    .toArray();

  return NextResponse.json(posts);
}*/

/*export async function GET(request: Request) {
  console.log("API 호출 트리거됨");

  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword");

    if (!keyword) {
      console.log("키워드 없음");
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    console.log("MongoDB 연결 성공");

    const posts = await db
      .collection("posts")
      .find({ keywords: keyword })
      .toArray();
    console.log("쿼리 결과:", posts);

    if (!posts.length) {
      return NextResponse.json({ error: "No posts found" }, { status: 404 });
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("API 처리 중 오류:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}*/

/*export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  if (!keyword) {
    return NextResponse.json({ error: "Keyword is required" }, { status: 400 });
  }

  const db = await connectDB();
  const posts = await db
    .collection("posts")
    .find({ keywords: keyword })
    .toArray();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const db = await connectDB();
  const result = await db.collection("posts").insertOne(body);
  return NextResponse.json(result.ops[0], { status: 201 });
}*/

/*import { Router } from "express";
import Product from "@/models/postModel";

const router = Router();

// 모든 제품을 가져오는 API
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // 모든 제품을 MongoDB에서 가져옵니다.
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

// 특정 제품을 가져오는 API (예: ID로)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // ID로 제품을 조회
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
  }
});

export default router;*/

import { connectDB } from "@/lib/repository";
import { NextResponse } from "next/server"; // Next.js 13에서 제공하는 응답 객체

export async function GET(request: Request) {
  console.log("API 호출 트리거됨");

  try {
    const { searchParams } = new URL(request.url); // URL에서 쿼리 파라미터 추출
    const keyword = searchParams.get("keyword");

    if (!keyword) {
      console.log("키워드 없음");
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }

    const db = await connectDB(); // MongoDB 연결
    console.log("MongoDB 연결 성공");

    const posts = await db
      .collection("posts")
      .find({ keywords: keyword })
      .toArray();
    console.log("쿼리 결과:", posts);

    if (!posts.length) {
      return NextResponse.json({ error: "No posts found" }, { status: 404 });
    }

    return NextResponse.json(posts); // JSON 형식으로 응답 반환
  } catch (error) {
    console.error("API 처리 중 오류:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
