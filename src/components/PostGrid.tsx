import React from "react";
import PostCard from "./PostCard";
import PostList from "./PostList";

const PostGrid = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
      <PostList />
    </div>
  );
};

export default PostGrid;

/*
<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
<PostCard size="large" content="Post 1" />
<PostCard size="medium" content="Post 2" />
<PostCard size="small" content="Post 3" />
<PostCard size="large" content="Post 4" />
<PostCard size="medium" content="Post 5" />
<PostCard size="small" content="Post 6" />
</div>*/
