/*import React, { useState } from "react";
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
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
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

export default HomePage;*/

/*import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByKeyword } from "@/redux/actions/postActions";
import { RootState } from "@/redux/store";
import Modal from "@/components/Modal";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  // 모달 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  const closeModal = () => setIsModalOpen(false);

  const handleKeywordSelect = async (keyword: string) => {
    setSelectedKeyword(keyword);
    setIsModalOpen(false); // 모달 닫기
    dispatch(fetchPostsByKeyword(keyword)); // 키워드에 따라 게시물 가져오기
  };

  useEffect(() => {
    if (selectedKeyword) {
      dispatch(fetchPostsByKeyword(selectedKeyword)); // 초기 키워드 데이터 가져오기
    }
  }, [selectedKeyword, dispatch]);

  return (
    <div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onKeywordSelect={handleKeywordSelect}
      />

      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;*/

/*import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsByKeyword } from "@/redux/actions/postActions";
import { closeModal } from "@/redux/slices/modalSlice";
import Modal from "@/components/Modal";

const HomePage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true); // 초기값: 모달 열림
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null); // 선택된 키워드 상태

  console.log("isModalOpen 상태:", isModalOpen);

  const handleKeywordSelect = async (keyword: string) => {
    setSelectedKeyword(keyword);
    setIsModalOpen(false); // 모달 닫기
    dispatch(fetchPostsByKeyword(keyword)); // 선택된 키워드로 게시물 가져오기
  };
  console.log("isModalOpen 상태:", isModalOpen);
  return (
    <div>

      <Modal
        isOpen={isModalOpen}
        onKeywordSelect={handleKeywordSelect}
        onClose={() => dispatch(closeModal())} // Close 버튼 클릭 시 모달 닫기
      />


      {selectedKeyword && (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">

        </div>
      )}
    </div>
  );
}



export default HomePage;*/
/*"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true); // 로컬 상태로 모달 제어

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <h1>Home Page</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </div>
  );
};

export default HomePage;*/
import React from "react";
import ContentGrid from "@/components/ContentGrid/ContentGrid";
import "../styles/layout.css";

const Page = () => {
  return (
    <div className="w-full mt-2">
      <main>
        <ContentGrid />
      </main>
    </div>
  );
};

export default Page;
