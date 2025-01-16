import React from "react";
import styles from "./Skeletom.module.css"; // 스켈레톤 스타일

const Skeleton: React.FC = () => {
  return (
    <div className={styles.skeletonItem}>
      <div className={styles.skeletonThumbnail}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
      </div>
    </div>
  );
};

export default Skeleton;
