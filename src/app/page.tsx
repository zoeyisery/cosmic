"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import axios from "axios";

const HomePage = () => {
  //const [keywords] = useState(["skincare", "makeup", "haircare"]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", description: "Description for Post 1" },
    { id: 2, title: "Post 2", description: "Description for Post 2" },
  ]); // 임시 데이터

  /*const fetchPosts = async (keyword: string) => {
    const res = await axios.get(`/api/posts?keyword=${keyword}`);
    setPosts(res.data);
  };

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeyword(keyword);
    fetchPosts(keyword);
  };*/

  const keywords = ["Skincare", "Makeup", "Haircare"];

  const handleKeywordSelect = async (keyword: string) => {
    setSelectedKeyword(keyword);
    setIsModalOpen(false);

    try {
      const response = await axios.get(`/api/posts?keyword=${keyword}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <div>
      <Modal isOpen={!selectedKeyword} onClose={() => {}}>
        <h2>Select a Keyword</h2>
        {keywords.map((keyword) => (
          <button key={keyword} onClick={() => handleKeywordSelect(keyword)}>
            {keyword}
          </button>
        ))}
      </Modal>
      <div>
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
