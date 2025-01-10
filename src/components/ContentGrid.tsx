import React from "react";
import PostList from "./PostList";

const ContentGrid = () => {
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

export default ContentGrid;
