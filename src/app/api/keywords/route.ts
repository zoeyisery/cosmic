import { connectDB } from "@/lib/repository";
import { NextResponse } from "next/server"; // Next.js 13에서 제공하는 응답 객체

export async function GET(request: Request) {
  console.log("API 호출 트리거됨");

  try {
    /*const { searchParams } = new URL(request.url); // URL에서 쿼리 파라미터 추출
    const keyword = searchParams.get("keyword");

    if (!keyword) {
      console.log("키워드 없음");
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }*/

    const db = await connectDB(); // MongoDB 연결
    console.log("MongoDB 연결 성공");

    const keywords = await db.collection("keywords").find().toArray();
    console.log("쿼리 결과:", keywords);

    if (!keywords.length) {
      return NextResponse.json({ error: "No posts found" }, { status: 404 });
    }

    return NextResponse.json(keywords); // JSON 형식으로 응답 반환
  } catch (error) {
    console.error("API 처리 중 오류:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
