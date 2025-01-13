import React from "react";
import "../styles/skeleton.css"; // 스켈레톤 스타일

const Skeleton: React.FC = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
      </div>
    </div>
  );
};

export default Skeleton;
