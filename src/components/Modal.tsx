"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "../store/slices/keywordSlice";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();

  const keywords = ["Beauty", "Skin", "Makeup", "Hair"];

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

export default Modal;
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
