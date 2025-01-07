import React from "react";
import PostCard from "./PostCard";
import PostList from "./PostList";

const PostGrid = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1">
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
};

export default PostGrid;
