"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useKeywordManager } from "../hooks/useKeywordManager"; // 커스텀 훅 임포트
import { useKeywordsFetcher } from "../hooks/useKeywordFetcher"; // 키워드 데이터 가져오는 커스텀 훅
import "../styles/modal.css";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const { selectedKeywords, localKeywords, handleKeywordSelect, handleClose } =
    useKeywordManager(); // 키워드 관리 훅
  const { keywords, loading, error } = useKeywordsFetcher(); // MongoDB에서 키워드 가져오는 훅

  //const filteredKeywords = keywords.filter(keyword => !selectedKeywords.includes(keyword));

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* 모달 헤더 */}
        <div className="modal-header">
          <button
            onClick={() => {
              handleClose();
              closeModal();
            }}
            className="close-button"
          >
            <FontAwesomeIcon icon={faXmark} className="close-icon" />
          </button>
        </div>

        {/* 모달 본문 */}
        <div className="modal-body">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="keyword-buttons">
              {keywords.length > 0 ? (
                keywords.map((keyword) => (
                  <button
                    key={keyword}
                    className={`keyword-button ${
                      localKeywords.includes(keyword) ? "selected" : ""
                    }`}
                    onClick={() => handleKeywordSelect(keyword)} // 키워드 선택/해제
                  >
                    {keyword}
                  </button>
                ))
              ) : (
                <p>No keywords available</p> // 키워드가 없을 경우 메시지 표시
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

/*"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useKeywordManager } from "../hooks/useKeywordManager"; // 커스텀 훅 임포트
import { useKeywordsFetcher } from "../hooks/useKeywordFetcher"; // 키워드 데이터 가져오는 커스텀 훅

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const { selectedKeywords, localKeywords, handleKeywordSelect, handleClose } =
    useKeywordManager(); // 커스텀 훅 사용
  const [keywords, setKeywords] = useState<string[]>([]); // 키워드 목록 상태
  const [loading, setLoading] = useState<boolean>(true); // 데이터 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // MongoDB에서 키워드 목록을 가져오는 함수
  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await fetch("/api/keywords");
        const data = await response.json();

        if (response.ok) {
          setKeywords(data.map((item: { keyword: string }) => item.keyword)); // 키워드 배열을 상태에 저장
        } else {
          setError(data.message || "Failed to fetch keywords");
        }
      } catch (err) {
        setError("Error fetching keywords");
      } finally {
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchKeywords();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  
  if (loading) {
    return <div>Loading...</div>; // 로딩 중 표시
  }

  if (error) {
    return <div>Error: {error}</div>; // 에러 발생 시 메시지 표시
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-96">
        <div className="space-x-3 space-y-2">
          {keywords.length > 0 ? (
            keywords.map((keyword) => (
              <button
                key={keyword}
                className={`w-auto p-2 text-center text-sm bg-gray-200 rounded-full hover:bg-gray-300 ${
                  localKeywords.includes(keyword)
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => handleKeywordSelect(keyword)} // 키워드 선택/해제
              >
                {keyword}
              </button>
            ))
          ) : (
            <p>No keywords available</p> // 키워드가 없을 경우 메시지 표시
          )}
        </div>
        <button
          onClick={() => {
            handleClose();
            closeModal();
          }} // "close" 버튼 클릭 시에만 모달 닫히도록
          className="absolute p-2 text-black top-1 right-2"
        >
          <FontAwesomeIcon icon={faXmark} className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default Modal;*/
/*"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword, removeKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const selectedKeywords = useSelector(
    (state: any) => state.keyword.selectedKeywords
  ); // Redux 상태에서 선택된 키워드 가져오기
  const [keywords, setKeywords] = useState<string[]>([]); // 키워드 상태
  const [loading, setLoading] = useState<boolean>(true); // 데이터 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [localKeywords, setLocalKeywords] = useState<string[]>([]); // 로컬 상태로 선택된 키워드 관리

  // MongoDB에서 키워드 목록을 가져오는 함수
  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await fetch("/api/keywords");
        const data = await response.json();

        if (response.ok) {
          setKeywords(data.map((item: { keyword: string }) => item.keyword)); // 키워드 배열을 상태에 저장
        } else {
          setError(data.message || "Failed to fetch keywords");
        }
      } catch (err) {
        setError("Error fetching keywords");
      } finally {
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchKeywords();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  useEffect(() => {
    setLocalKeywords(selectedKeywords); // 모달 열릴 때 선택된 키워드를 초기화
  }, [selectedKeywords]); // selectedKeywords가 변경될 때마다 초기화

  const handleKeywordSelect = (keyword: string) => {
    if (localKeywords.includes(keyword)) {
      // 이미 선택된 키워드라면 배열에서 제거
      setLocalKeywords(localKeywords.filter((item) => item !== keyword));
      //dispatch(removeKeyword(keyword)); // Redux 상태에서 제거
    } else {
      // 선택되지 않은 키워드라면 배열에 추가
      setLocalKeywords([...localKeywords, keyword]);
      //dispatch(setKeyword([keyword])); // Redux 상태에 추가
    }
  };

  const handleClose = () => {
    // 모달 닫을 때 Redux 상태 업데이트
    // 1. localKeywords에 있는 키워드들을 selectedKeywords로 반영
    localKeywords.forEach((keyword) => {
      if (!selectedKeywords.includes(keyword)) {
        dispatch(setKeyword([keyword])); // 선택된 키워드를 Redux에 추가
      }
    });

    // 2. selectedKeywords에서 localKeywords에 포함되지 않는 키워드는 제거
    selectedKeywords.forEach((keyword: string) => {
      if (!localKeywords.includes(keyword)) {
        dispatch(removeKeyword(keyword)); // 선택되지 않은 키워드를 Redux에서 제거
      }
    });

    closeModal(); // `Close` 버튼을 클릭할 때 모달 닫기
  };

  if (loading) {
    return <div>Loading...</div>; // 로딩 중 표시
  }

  if (error) {
    return <div>Error: {error}</div>; // 에러 발생 시 메시지 표시
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-96">
        <div className="space-x-3 space-y-2">
          {keywords.length > 0 ? (
            keywords.map((keyword) => (
              <button
                key={keyword}
                className={`w-auto p-2 text-center text-sm bg-gray-200 rounded-full hover:bg-gray-300 ${
                  localKeywords.includes(keyword)
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => handleKeywordSelect(keyword)} // 키워드 선택/해제
              >
                {keyword}
              </button>
            ))
          ) : (
            <p>No keywords available</p> // 키워드가 없을 경우 메시지 표시
          )}
        </div>
        <button
          onClick={handleClose} // "close" 버튼 클릭 시에만 모달 닫히도록
          className="absolute p-2 text-black top-1 right-2"
        >
          <FontAwesomeIcon icon={faXmark} className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default Modal;*/
/*"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "../store/slices/keywordSlice";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();

  const keywords = ["Beauty", "Skincare", "Makeup", "Hair"];

  const handleKeywordSelect = (keyword: string) => {
    dispatch(setKeyword(keyword)); // 키워드를 Redux 상태에 저장
    closeModal(); // 모달 닫기
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Select a Keyword</h2>
        <div>
          {keywords.map((keyword) => (
            <button
              key={keyword}
              className="w-auto p-2 text-center bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => handleKeywordSelect(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
        <button
          onClick={closeModal}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;*/
/*import React, { useState } from "react";

interface ModalProps {
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const keywords = ["Beauty", "Skincare", "Makeup"]; // 예시 키워드 목록

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeywords((prevKeywords) => {
      if (prevKeywords.includes(keyword)) {
        // 이미 선택된 키워드가 있다면 제거
        return prevKeywords.filter((kw) => kw !== keyword);
      } else {
        // 선택되지 않은 키워드를 추가
        return [...prevKeywords, keyword];
      }
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Select a Keyword</h2>
        <div className="space-x-2 space-y-2">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              className={`w-auto p-2 text-center bg-gray-200 rounded-full hover:bg-gray-300 ${
                selectedKeywords.includes(keyword)
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => handleKeywordSelect(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};*/
/*import React, { useState } from "react";

interface ModalProps {
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const keywords = ["Beauty", "Skincare", "Makeup"]; // 예시 키워드 목록

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeywords((prevKeywords) => {
      if (prevKeywords.includes(keyword)) {
        // 이미 선택된 키워드가 있다면 제거
        return prevKeywords.filter((kw) => kw !== keyword);
      } else {
        // 선택되지 않은 키워드를 추가
        return [...prevKeywords, keyword];
      }
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Select a Keyword</h2>
        <div className="space-x-2 space-y-2">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              className={`w-auto p-2 text-center bg-gray-200 rounded-full hover:bg-gray-300 ${
                selectedKeywords.includes(keyword)
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => handleKeywordSelect(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};*/
