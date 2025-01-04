"use client";

import React, { useState } from "react";
const Modal = ({
  isOpen,
  //onKeywordSelect,
  onClose,
}: {
  isOpen: boolean;
  //onKeywordSelect: (keyword: string) => void;
  onClose: () => void;
}) => {
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  const keywords = ["Skincare", "Makeup", "Haircare", "Fragrance"]; // 예제 키워드

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(keyword); // 선택된 키워드 업데이트
  };

  const handleClose = () => {
    if (selectedKeyword) {
      //onKeywordSelect(selectedKeyword); // 선택된 키워드 전달
    }
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-lg font-bold mb-4 text-center">
          키워드를 선택하세요
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              className={`px-4 py-2 rounded ${
                selectedKeyword === keyword
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-blue-500 hover:text-white`}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
