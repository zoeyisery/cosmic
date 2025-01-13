import { useState, useEffect } from "react";

export const usePostFetcher = (selectedKeywords: string[], size: string) => {
  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  const getPostCountForSize = (size: string) => {
    switch (size) {
      case "xs":
        return 3;
      case "s":
        return 2;
      case "m":
        return 1;
      case "l":
        return 1;
      case "xl":
        return 1;
      default:
        return 1;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "/api/posts";

        // 선택된 키워드가 하나일 경우
        if (selectedKeywords.length === 1) {
          url = `/api/posts?keyword=${selectedKeywords[0]}`;
        }
        // 여러 키워드일 경우
        else if (selectedKeywords.length > 1) {
          url = `/api/posts?keywords=${selectedKeywords.join(",")}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // 랜덤으로 선택할 개수만큼 포스트 선택
          const count = getPostCountForSize(size);
          const randomPosts = [];
          const availablePosts = [...data];

          // 랜덤으로 포스트 선택 (중복되지 않게 선택)
          while (randomPosts.length < count && availablePosts.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * availablePosts.length
            );
            const randomPost = availablePosts.splice(randomIndex, 1)[0]; // 선택한 포스트를 배열에서 제거
            randomPosts.push(randomPost);
          }

          setPosts(randomPosts); // 랜덤으로 선택된 포스트 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeywords.length > 0) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 포스트 없다고 설정
    }
  }, [selectedKeywords, size]); // 키워드와 사이즈, 그리고 dispatch가 변경될 때마다 실행

  return posts;
};
