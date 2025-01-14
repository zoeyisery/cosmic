import React, { useEffect, useState } from "react";
import styles from "./PostItem.module.css";
import { suite } from "node:test";

interface PostItemProps {
  size: "xs" | "s" | "m" | "l" | "xl";
  content: {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const PostItem: React.FC<PostItemProps> = ({ size, content }) => {
  if (!content) {
    return <div>Content is missing</div>; // content가 없다면 fallback 메시지 표시
  }

  const { _id, title, description, imageUrl } = content || {}; // content가 없다면 기본값으로 빈 객체 사용 옵셔널 체이닝

  return (
    <div
      className={`${styles.postItem} ${styles[size]}`}
      style={
        {
          "--backgroundImage": `url(${content.imageUrl})`,
        } as React.CSSProperties
      }
    >
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        {imageUrl && (
          <img src={imageUrl} alt={title} className={styles.image} />
        )}
      </div>
    </div>
  );
};

export default PostItem;
