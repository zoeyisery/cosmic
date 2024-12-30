import { fetchPostsByKeyword } from "@/models/postModel";

export const handleKeywordSelection = async (
  keyword: string,
  setPosts: React.Dispatch<React.SetStateAction<any[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    const posts = await fetchPostsByKeyword(keyword);
    setPosts(posts); // View에 데이터를 전달
    setError(null); // 오류 초기화
  } catch (error) {
    setError("Failed to fetch posts.");
  }
};
