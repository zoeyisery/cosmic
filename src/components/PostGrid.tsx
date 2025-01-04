import React from "react";
import PostCard from "./PostCard";

const PostGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  w-full">
      <PostCard size="large" content="Post 1" />
      <PostCard size="medium" content="Post 2" />
      <PostCard size="small" content="Post 3" />
      <PostCard size="large" content="Post 4" />
      <PostCard size="medium" content="Post 5" />
      <PostCard size="small" content="Post 6" />
      <PostCard size="large" content="Post 7" />
      <PostCard size="medium" content="Post 8" />
      <PostCard size="small" content="Post 9" />
      <PostCard size="large" content="Post 10" />
      <PostCard size="medium" content="Post 11" />
      <PostCard size="small" content="Post 12" />
    </div>
  );
};

export default PostGrid;

/*
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
<PostCard size="large" content="Post 1" />
<PostCard size="medium" content="Post 2" />
<PostCard size="small" content="Post 3" />
<PostCard size="large" content="Post 4" />
<PostCard size="medium" content="Post 5" />
<PostCard size="small" content="Post 6" />
</div>*/
