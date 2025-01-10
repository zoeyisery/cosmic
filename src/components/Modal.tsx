"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트

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
  const [localKeyword, setLocalKeyword] = useState<string | null>(null); // 로컬 상태로 선택된 키워드 관리

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

  const handleKeywordSelect = (keyword: string) => {
    // 선택된 키워드를 Redux 상태에 저장
    //dispatch(setKeyword(keyword));
    setLocalKeyword(keyword); // 로컬 상태에서 선택된 키워드 저장
  };

  const handleClose = () => {
    dispatch(setKeyword(localKeyword || "")); // Redux 상태에 선택된 키워드를 저장
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
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Select a Keyword</h2>
        <div className="space-x-3 space-y-2">
          {keywords.length > 0 ? (
            keywords.map((keyword) => (
              <button
                key={keyword}
                className={`w-auto p-2 text-center bg-gray-200 rounded-full hover:bg-gray-300 ${
                  localKeyword === keyword ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleKeywordSelect(keyword)} // 키워드 선택
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
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
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
