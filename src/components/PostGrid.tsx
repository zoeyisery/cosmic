import React from "react";
import PostCard from "./PostCard";

const PostGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <PostCard size="large" content="Post 1" />
      <PostCard size="medium" content="Post 2" />
      <PostCard size="small" content="Post 3" />
      <PostCard size="large" content="Post 4" />
      {/* 다른 포스트 카드들 */}
    </div>
  );
};

export default PostGrid;
