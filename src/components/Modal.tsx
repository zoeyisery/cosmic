"use client";

import React, { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  onKeywordSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onKeywordSelect: (keyword: string[]) => void;
}) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const keywords = ["Skincare", "Makeup", "Haircare", "Fragrance"];

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.includes(keyword)
        ? prevKeywords.filter((k) => k !== keyword)
        : [...prevKeywords, keyword]
    );
  };

  const handleClose = () => {
    if (selectedKeywords.length > 0) {
      onKeywordSelect(selectedKeywords); // 부모 컴포넌트로 키워드 전달
    }
    onClose();
  };

  if (!isOpen) return null;

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
                selectedKeywords.includes(keyword)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-blue-500 hover:text-white`}
              onClick={() => toggleKeyword(keyword)}
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
