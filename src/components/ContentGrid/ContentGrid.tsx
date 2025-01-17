/*"use client";

import React, { useEffect, useState } from "react";
import PostList from "./PostList";

const ContentGrid = () => {
  const [postListOrder, setPostListOrder] = useState<string[]>([]);

  // 페이지 새로 고침 시, 랜덤으로 PostList의 순서 변경
  useEffect(() => {
    const sizes = ["xs", "s", "m", "l", "xl"];
    setPostListOrder(shuffleArray(sizes)); // 배열 섞기
  }, []);

  // 배열을 랜덤하게 섞는 함수
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 두 값을 교환
    }
    return shuffled;
  };

  return (
    <div className="grid w-full gap-4">
      {postListOrder.map((size, index) => (
        <PostList key={index} size={size as "xs" | "s" | "m" | "l" | "xl"} />
      ))}
    </div>
  );
};

export default ContentGrid;*/

import React from "react";
import PostGrid from "@/components/Posts/PostGrid/PostGrid";
import styles from "./ContentGrid.module.css";

const ContentGrid = () => {
  return (
    <div className={styles.contentGrid}>
      <PostGrid size="l" />
      <PostGrid size="xs" />
      <PostGrid size="m" />
      <PostGrid size="s" />
    </div>
  );
};

export default ContentGrid;
