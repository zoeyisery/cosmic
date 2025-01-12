import React, { useEffect, useState } from "react";
import "../styles/postcard.css";

interface PostCardProps {
  size: "xs" | "s" | "m" | "l" | "xl";
  content: {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ size, content }) => {
  if (!content) {
    return <div>Content is missing</div>; // content가 없다면 fallback 메시지 표시
  }

  const { _id, title, description, imageUrl } = content || {}; // content가 없다면 기본값으로 빈 객체 사용 옵셔널 체이닝

  return (
    <div className={`post-card ${size}`}>
      <div className="post-card-content">
        <h3 className="post-card-title">{title}</h3> {/* 제목 표시 */}
        <p className="post-card-description">{description}</p> {/* 설명 표시 */}
        {imageUrl && (
          <img src={imageUrl} alt={title} className="post-card-image" />
        )}
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
