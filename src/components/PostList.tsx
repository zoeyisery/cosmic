"use client";
/*import React, { useEffect, useState } from "react";
import PostCard from "./PostCard"; // PostCard 컴포넌트 불러오기

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostCard key={index} size="medium" content={post.content} />
      ))}
    </div>
  );
};

export default PostList;*/
/*import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setPosts, filterPostsByKeyword } from "../store/slices/postSlice";

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const selectedKeyword = useSelector((state: RootState) => state.posts.selectedKeyword);

  useEffect(() => {
    // 포스트 데이터를 가져와 Redux에 저장
    const postData = [
      { id: 1, content: "Post 1", keywords: ["Beauty"] },
      { id: 2, content: "Post 2", keywords: ["Skin"] },
      { id: 3, content: "Post 3", keywords: ["Makeup"] },
      { id: 4, content: "Post 4", keywords: ["Beauty", "Skin"] },
    ];

    dispatch(setPosts(postData)); // 포스트 목록을 Redux에 저장

    // 키워드가 선택된 경우에만 필터링
    dispatch(filterPostsByKeyword(selectedKeyword));
  }, [dispatch, selectedKeyword]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.content}</h3>
        </div>
      ))}
    </div>
  );
};*/

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

const PostList: React.FC = () => {
  const selectedKeyword = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기
  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?keyword=${selectedKeyword}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          // 데이터가 배열인지 확인
          setPosts(data); // 포스트 목록 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
        //setPosts(data); // 필터링된 포스트 목록 상태에 저장
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeyword) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 빈 목록으로 초기화
    }
  }, [selectedKeyword]); // 선택된 키워드가 변경될 때마다 실행

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post._id} content={post} size={post.size} />
        ))
      ) : (
        <div className="no-posts-message">
          <p>No posts found</p>
        </div>
      )}
    </div>
  );
};
export default PostList;
