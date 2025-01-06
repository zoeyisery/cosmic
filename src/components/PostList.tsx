"use client";
import React, { useEffect, useState } from "react";
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

export default PostList;
