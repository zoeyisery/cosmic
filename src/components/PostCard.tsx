import React from "react";
import "../styles/postcard.css";

interface PostCardProps {
  size: "small" | "medium" | "large";
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ size, content }) => {
  return (
    <div className={`post-card ${size}`}>
      <div className="post-card-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
