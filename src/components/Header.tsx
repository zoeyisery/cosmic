"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faList } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedKeyword = useSelector(
    (state: RootState) => state.keyword.selectedKeyword
  ); // Redux에서 키워드 상태 가져오기

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeywordSelect = (keyword: string) => {
    dispatch(setKeyword(keyword)); // Redux 상태 업데이트
    closeModal();
  };

  return (
    <header className="sticky top-0 z-10 bg-white ">
      {/* 텍스트와 아이콘을 수평으로 정렬 */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* TailwindCSS 클래스로 스타일 적용 */}
        <h1 className="font-bold text-yellow-400 text-md">COSMIC</h1>
        <div className="flex space-x-4">
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16px]" />
          </button>
          <button onClick={openModal}>
            <FontAwesomeIcon icon={faList} className="text-[16px]" />
          </button>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
};

export default Header;
