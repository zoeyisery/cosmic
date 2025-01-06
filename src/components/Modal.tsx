"use client";

import React, { useState } from "react";

interface ModalProps {
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  const keywords = ["Beauty", "Skin", "Makeup", "Hair"]; // 예시 키워드 목록

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeyword(keyword);
    // 키워드를 선택하고 모달을 닫을 수 있음
    alert(`Selected keyword: ${keyword}`);
    closeModal(); // 선택 후 모달 닫기
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Select a Keyword</h2>
        <div className="space-y-2">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              className="w-full p-2 text-left bg-gray-200 rounded hover:bg-gray-300"
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
};

/*const Modal = ({
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-lg font-bold text-center">
          키워드를 선택하세요
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};*/

export default Modal;
