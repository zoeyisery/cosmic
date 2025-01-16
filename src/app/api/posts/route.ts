/*import { connectDB } from "@/lib/repository"; // MongoDB 연결 함수
import Post from "@/models/PostModel"; // Post Mongoose 모델
import { NextResponse } from "next/server"; // Next.js 13에서 제공하는 응답 객체
import mongoose from "mongoose";

export async function GET(request: Request) {
  console.log("API 호출 트리거됨");

  try {
    const { searchParams } = new URL(request.url); // URL에서 쿼리 파라미터 추출
    const keyword = searchParams.get("keyword"); // 하나의 키워드
    const keywords = searchParams.get("keywords"); // 여러 키워드 (콤마로 구분된 문자열)

    // MongoDB 연결 (Mongoose 사용)
    await connectDB(); // MongoDB 연결
    console.log("MongoDB 연결 성공");

    let posts;

    // 하나의 키워드로 필터링
    if (keyword) {
      console.log("선택된 키워드:", keyword);
      posts = await Post.find({ keywords: { $in: [keyword] } });
      console.log("쿼리 결과 (하나의 키워드):", posts);
    }
    // 여러 키워드로 필터링
    else if (keywords) {
      const keywordArray = keywords.split(","); // 여러 키워드를 배열로 변환
      posts = await Post.find({ keywords: { $all: keywordArray } });
      console.log("쿼리 결과 (여러 키워드):", posts);
    } else {
      return NextResponse.json(
        { error: "At least one keyword is required" },
        { status: 400 }
      );
    }

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
}*/
import { connectDB } from "@/lib/repository";
import { NextResponse } from "next/server"; // Next.js 13에서 제공하는 응답 객체

export async function GET(request: Request) {
  console.log("API 호출 트리거됨");

  try {
    const { searchParams } = new URL(request.url); // URL에서 쿼리 파라미터 추출
    const keyword = searchParams.get("keyword"); // 하나의 키워드
    const keywords = searchParams.get("keywords"); // 여러 키워드 (콤마로 구분된 문자열)

    const db = await connectDB(); // MongoDB 연결
    console.log("MongoDB 연결 성공");

    let posts;

    if (keyword) {
      // 하나의 키워드로 필터링
      posts = await db
        .collection("posts")
        .find({ keywords: { $in: [keyword] } })
        .toArray();
      console.log("쿼리 결과 (하나의 키워드):", posts);
    } else if (keywords) {
      // 여러 키워드로 필터링
      const keywordArray = keywords.split(","); // 여러 키워드를 배열로 변환
      posts = await db
        .collection("posts")
        .find({ keywords: { $all: keywordArray } })
        .toArray();
      console.log("쿼리 결과 (여러 키워드):", posts);
    } else {
      return NextResponse.json(
        { error: "At least one keyword is required" },
        { status: 400 }
      );
    }

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
