"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import { handleKeywordSelection } from "@/controllers/postControl";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [posts, setPosts] = useState([]); // 게시물 상태
  const [error, setError] = useState<string | null>(null);

  const closeModal = () => setIsModalOpen(false);

  console.log("handleKeywordSelection:", handleKeywordSelection);

  const handleKeywordSelect = async (keywords: string[]) => {
    setIsModalOpen(false); // 모달 닫기
    for (const keyword of keywords) {
      await handleKeywordSelection(keyword, setPosts, setError);
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onKeywordSelect={handleKeywordSelect}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
