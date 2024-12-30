import { NextResponse } from "next/server";
import { connectDB } from "@/lib/repository";

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

const mockData = [
  {
    id: 1,
    title: "Skincare Tips",
    description: "All about skincare",
    keyword: "Skincare",
  },
  {
    id: 2,
    title: "Makeup Ideas",
    description: "Perfect makeup for you",
    keyword: "Makeup",
  },
  {
    id: 3,
    title: "Haircare Routine",
    description: "Best haircare tips",
    keyword: "Haircare",
  },
];

/*export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  const filteredData = mockData.filter((post) => post.keyword === keyword);
  return NextResponse.json(filteredData);
}*/
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

export async function GET(request: Request) {
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
      .find({ keywords: { $in: [keyword] } })
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
}
