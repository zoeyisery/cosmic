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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  const filteredData = mockData.filter((post) => post.keyword === keyword);
  return NextResponse.json(filteredData);
}
