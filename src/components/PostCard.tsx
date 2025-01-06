import React, { useEffect, useState } from "react";
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

/*
const PostCard = ({ size, content }: PostCardProps) => {
  let cardClasses = 'bg-white p-4 rounded-lg shadow-lg';

  if (size === 'small') {
    cardClasses += ' w-full sm:w-1/3';
  } else if (size === 'medium') {
    cardClasses += ' w-full sm:w-2/3';
  } else if (size === 'large') {
    cardClasses += ' w-full sm:w-full';
  }

  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-semibold text-gray-800">{content}</h2>
      // 카드 안에 다른 내용
      </div>
    );
  };
  

*/
