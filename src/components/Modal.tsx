"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean; // 모달의 열림/닫힘 상태
  onClose: () => void; // 닫기 버튼 동작
  children: React.ReactNode; // 모달 내부에 렌더링할 내용
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null; // 모달이 닫혀 있으면 아무것도 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
