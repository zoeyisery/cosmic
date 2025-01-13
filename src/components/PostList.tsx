"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import { setKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트
import { usePostFetcher } from "../hooks/usePostFetcher"; // 커스텀 훅 임포트
import { useKeywordsFetcher } from "../hooks/useKeywordFetcher"; // 키워드 데이터 가져오는 커스텀 훅
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";
import Skeleton from "./Skeleton";

interface PostListProps {
  size: "xs" | "s" | "m" | "l" | "xl"; // PostList 크기
}

const PostList: React.FC<PostListProps> = ({ size }) => {
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기
  const dispatch = useDispatch();

  const { keywords, loading, error } = useKeywordsFetcher(); // MongoDB에서 키워드 가져오는 훅

  useEffect(() => {
    if (selectedKeywords.length === 0 && keywords.length > 0) {
      // 키워드가 선택되지 않았으면 랜덤 키워드를 선택하여 Redux에 저장
      const randomKeyword =
        keywords[Math.floor(Math.random() * keywords.length)];
      dispatch(setKeyword([randomKeyword])); // 랜덤 키워드를 selectedKeywords에 설정
    }
  }, [selectedKeywords, dispatch, keywords]);

  // 커스텀 훅을 통해 포스트 가져오기
  const posts = usePostFetcher(selectedKeywords, size);

  return (
    <div className={`post-list ${size}`}>
      <div className="post-list-row">
        {loading ? (
          // 로딩 중이면 스켈레톤 UI를 표시
          Array(5)
            .fill(0)
            .map((_, index) => <Skeleton key={index} />) // 5개의 스켈레톤 UI 표시
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post._id} content={post} size={size} />
          ))
        ) : (
          <div className="no-posts-message">
            <p>No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
/*"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import { setKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

interface PostListProps {
  size: "xs" | "s" | "m" | "l" | "xl"; // PostList 크기
}

const PostList: React.FC<PostListProps> = ({ size }) => {
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  // 각 사이즈별로 렌더링할 포스트의 개수를 정합니다
  const getPostCountForSize = () => {
    switch (size) {
      case "xs":
        return 3; // xs 사이즈에는 3개의 포스트
      case "s":
        return 2; // s 사이즈에는 2개의 포스트
      case "m":
        return 1; // m 사이즈에는 1개의 포스트
      case "l":
        return 1; // l 사이즈에는 1개의 포스트
      case "xl":
        return 1; // xl 사이즈에는 1개의 포스트
      default:
        return 1;
    }
  };

  // 랜덤 키워드 목록
  const keywordList = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "/api/posts";

        // 선택된 키워드가 하나일 경우
        if (selectedKeywords.length === 1) {
          url = `/api/posts?keyword=${selectedKeywords[0]}`;
        }
        // 여러 키워드일 경우
        else if (selectedKeywords.length > 1) {
          url = `/api/posts?keywords=${selectedKeywords.join(",")}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // 랜덤으로 선택할 개수만큼 포스트 선택
          const count = getPostCountForSize();
          const randomPosts = [];
          const availablePosts = [...data];

          // 랜덤으로 포스트 선택 (중복되지 않게 선택)
          while (randomPosts.length < count && availablePosts.length > 0) {
            const randomIndex = Math.floor(Math.random() * availablePosts.length);
            const randomPost = availablePosts.splice(randomIndex, 1)[0]; // 선택한 포스트를 배열에서 제거
            randomPosts.push(randomPost);
          }

          setPosts(randomPosts); // 랜덤으로 선택된 포스트 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    // 키워드가 선택되지 않았으면 랜덤으로 키워드를 선택하고 포스트를 로드
    if (selectedKeywords.length === 0) {
      const randomKeyword = keywordList[Math.floor(Math.random() * keywordList.length)];
      dispatch(setKeyword([randomKeyword])); // 랜덤 키워드를 selectedKeywords에 설정
    }

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeywords.length > 0) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 포스트 없다고 설정
    }
  }, [selectedKeywords, size, dispatch]); // 키워드와 사이즈, 그리고 dispatch가 변경될 때마다 실행

  return (
    <div className={`post-list ${size}`}>
      <div className="post-list-row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post._id} content={post} size={size} />
          ))
        ) : (
          <div className="no-posts-message">
            <p>No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;*/
/*"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

interface PostListProps {
  size: "xs" | "s" | "m" | "l" | "xl"; // PostList 크기
}

const PostList: React.FC<PostListProps> = ({ size }) => {
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기

  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  // 각 사이즈별로 렌더링할 포스트의 개수를 정합니다
  const getPostCountForSize = () => {
    switch (size) {
      case "xs":
        return 3; // xs 사이즈에는 3개의 포스트
      case "s":
        return 2; // s 사이즈에는 2개의 포스트
      case "m":
        return 1; // m 사이즈에는 1개의 포스트
      case "l":
        return 1; // l 사이즈에는 1개의 포스트
      case "xl":
        return 1; // xl 사이즈에는 1개의 포스트
      default:
        return 1;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "/api/posts";

        // 선택된 키워드가 하나일 경우
        if (selectedKeywords.length === 1) {
          url = `/api/posts?keyword=${selectedKeywords[0]}`;
        }
        // 여러 키워드일 경우
        else if (selectedKeywords.length > 1) {
          url = `/api/posts?keywords=${selectedKeywords.join(",")}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // 랜덤으로 선택할 개수만큼 포스트 선택
          const count = getPostCountForSize();
          const randomPosts = [];
          const availablePosts = [...data];

          // 랜덤으로 포스트 선택 (중복되지 않게 선택)
          while (randomPosts.length < count && availablePosts.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * availablePosts.length
            );
            const randomPost = availablePosts.splice(randomIndex, 1)[0]; // 선택한 포스트를 배열에서 제거
            randomPosts.push(randomPost);
          }

          setPosts(randomPosts); // 랜덤으로 선택된 포스트 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeywords.length > 0) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 포스트 없다고 설정
    }
  }, [selectedKeywords, size]); // 선택된 키워드와 size가 변경될 때마다 실행

  return (
    <div className={`post-list ${size}`}>
      <div className="post-list-row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post._id} content={post} size={size} />
          ))
        ) : (
          <div className="no-posts-message">
            <p>No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;*/
/*"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

interface PostListProps {
  size: "xs" | "s" | "m" | "l" | "xl"; // PostList 크기
}

const PostList: React.FC<PostListProps> = ({ size }) => {
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기

  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  // 각 사이즈별로 렌더링할 포스트의 개수를 정합니다
  const getPostCountForSize = () => {
    switch (size) {
      case "xs":
        return 3; // xs 사이즈에는 3개의 포스트
      case "s":
        return 2; // s 사이즈에는 2개의 포스트
      case "m":
        return 1; // m 사이즈에는 1개의 포스트
      case "l":
        return 1; // l 사이즈에는 1개의 포스트
      case "xl":
        return 1; // xl 사이즈에는 1개의 포스트
      default:
        return 1;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "/api/posts";

        // 선택된 키워드가 하나일 경우
        if (selectedKeywords.length === 1) {
          url = `/api/posts?keyword=${selectedKeywords[0]}`;
        }
        // 여러 키워드일 경우
        else if (selectedKeywords.length > 1) {
          url = `/api/posts?keywords=${selectedKeywords.join(",")}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // 랜덤으로 선택할 개수만큼 포스트 선택
          const count = getPostCountForSize();
          const randomPosts = [];
          const availablePosts = [...data];

          // 랜덤으로 포스트 선택 (중복되지 않게 선택)
          while (randomPosts.length < count && availablePosts.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * availablePosts.length
            );
            const randomPost = availablePosts.splice(randomIndex, 1)[0]; // 선택한 포스트를 배열에서 제거
            randomPosts.push(randomPost);
          }

          setPosts(randomPosts); // 랜덤으로 선택된 포스트 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeywords.length > 0) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 빈 목록으로 초기화
    }
  }, [selectedKeywords, size]); // 선택된 키워드와 size가 변경될 때마다 실행

  return (
    <div className={`post-list ${size}`}>
      <div className="post-list-row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post._id} content={post} size={size} />
          ))
        ) : (
          <div className="no-posts-message">
            <p>No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;*/

/*"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

interface PostListProps {
  size: "xs" | "s" | "m" | "l" | "xl"; // PostList 크기
}

const PostList: React.FC<PostListProps> = ({ size }) => {
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기

  const [post, setPost] = useState<any | null>(null); //랜덤으로 선택된 포스트 상태

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "/api/posts";

        // 선택된 키워드가 하나일 경우
        if (selectedKeywords.length === 1) {
          url = `/api/posts?keyword=${selectedKeywords[0]}`;
        }
        // 여러 키워드일 경우
        else if (selectedKeywords.length > 1) {
          url = `/api/posts?keywords=${selectedKeywords.join(",")}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // 랜덤으로 하나의 포스트 선택
          const randomPost = data[Math.floor(Math.random() * data.length)];
          setPost(randomPost); // 랜덤 포스트 상태에 저장
        } else {
          setPost(null); // 포스트가 없으면 null로 설정
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPost(null); // 오류 발생 시 빈 배열로 설정
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeywords.length > 0) {
      fetchPosts();
    } else {
      setPost(null); // 키워드가 없으면 빈 목록으로 초기화
    }
  }, [selectedKeywords]); // 선택된 키워드가 변경될 때마다 실행

  return (
    <div className="post-list">
      {post ? (
        <PostCard key={post._id} content={post} size={size} />
      ) : (
        <div className="no-posts-message">
          <p>No posts found</p>
        </div>
      )}
    </div>
  );
};

export default PostList;*/
/*"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

const PostList: React.FC = () => {
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기

  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "/api/posts";

        // 선택된 키워드가 하나일 경우
        if (selectedKeywords.length === 1) {
          url = `/api/posts?keyword=${selectedKeywords[0]}`;
        }
        // 여러 키워드일 경우
        else if (selectedKeywords.length > 1) {
          url = `/api/posts?keywords=${selectedKeywords.join(",")}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
          setPosts(data); // 포스트 목록 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeywords.length > 0) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 빈 목록으로 초기화
    }
  }, [selectedKeywords]); // 선택된 키워드가 변경될 때마다 실행

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post._id} content={post} size={post.size} />
        ))
      ) : (
        <div className="no-posts-message">
          <p>No posts found</p>
        </div>
      )}
    </div>
  );
};

export default PostList;*/
/*"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Redux 상태 타입 임포트
import PostCard from "./PostCard"; // 포스트 카드 컴포넌트
import "../styles/postcard.css";

const PostList: React.FC = () => {
  const selectedKeyword = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // 선택된 키워드 가져오기

  const [posts, setPosts] = useState<any[]>([]); // 포스트 목록 상태

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?keyword=${selectedKeyword}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          // 데이터가 배열인지 확인
          setPosts(data); // 포스트 목록 상태에 저장
        } else {
          setPosts([]); // 배열이 아니면 빈 배열로 설정
        }
        //setPosts(data); // 필터링된 포스트 목록 상태에 저장
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // 선택된 키워드가 있을 경우만 API 호출
    if (selectedKeyword) {
      fetchPosts();
    } else {
      setPosts([]); // 키워드가 없으면 빈 목록으로 초기화
    }
  }, [selectedKeyword]); // 선택된 키워드가 변경될 때마다 실행

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post._id} content={post} size={post.size} />
        ))
      ) : (
        <div className="no-posts-message">
          <p>No posts found</p>
        </div>
      )}
    </div>
  );
};
export default PostList;*/

/*import React, { useEffect, useState } from "react";
import PostCard from "./PostCard"; // PostCard 컴포넌트 불러오기

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostCard key={index} size="medium" content={post.content} />
      ))}
    </div>
  );
};

export default PostList;*/
/*import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setPosts, filterPostsByKeyword } from "../store/slices/postSlice";

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const selectedKeyword = useSelector((state: RootState) => state.posts.selectedKeyword);

  useEffect(() => {
    // 포스트 데이터를 가져와 Redux에 저장
    const postData = [
      { id: 1, content: "Post 1", keywords: ["Beauty"] },
      { id: 2, content: "Post 2", keywords: ["Skin"] },
      { id: 3, content: "Post 3", keywords: ["Makeup"] },
      { id: 4, content: "Post 4", keywords: ["Beauty", "Skin"] },
    ];

    dispatch(setPosts(postData)); // 포스트 목록을 Redux에 저장

    // 키워드가 선택된 경우에만 필터링
    dispatch(filterPostsByKeyword(selectedKeyword));
  }, [dispatch, selectedKeyword]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.content}</h3>
        </div>
      ))}
    </div>
  );
};*/
