import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-center items-start w-full">
      <header className="Header flex w-full p-4">
        {/* 텍스트와 아이콘을 수평으로 정렬 */}
        <div className="flex items-center space-x-4">
          <div className="flex">
            {/* TailwindCSS 클래스로 스타일 적용 */}
            <h1 className="font-bold text-teal-400 text-xl">COSMIC</h1>
          </div>
          <div className="flex space-x-2">
            {/* 아이콘들에 TailwindCSS 클래스로 스타일 적용 */}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[16px]" // 아이콘 크기 설정
            />
            <FontAwesomeIcon
              icon={faList}
              className="text-[16px]" // 아이콘 크기 설정
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
