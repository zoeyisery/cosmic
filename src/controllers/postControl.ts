import { fetchPostsByKeyword } from "@/models/postModel";

export const handleKeywordSelection = async (
  keyword: string,
  setPosts: React.Dispatch<React.SetStateAction<any[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    console.log(`Fetching posts for keyword: ${keyword}`);
    const posts = await fetchPostsByKeyword(keyword);
    setPosts((prevPosts) => [...prevPosts, ...posts]); // 기존 게시물에 추가
    setError(null); // 오류 초기화
  } catch (error) {
    console.error("Error in handleKeywordSelection:", error);
    setError("Failed to fetch posts.");
  }
};
