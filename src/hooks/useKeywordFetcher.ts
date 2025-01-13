import { useState, useEffect } from "react";

export const useKeywordsFetcher = () => {
  const [keywords, setKeywords] = useState<string[]>([]); // 키워드 목록 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await fetch("/api/keywords");
        const data = await response.json();

        if (response.ok) {
          setKeywords(data.map((item: { keyword: string }) => item.keyword)); // 키워드 배열을 상태에 저장
        } else {
          setError(data.message || "Failed to fetch keywords");
        }
      } catch (err) {
        setError("Error fetching keywords");
      } finally {
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchKeywords();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return { keywords, loading, error };
};
