import React from "react";
import ClientIcon from "./ClientIcon";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white ">
      {/* 텍스트와 아이콘을 수평으로 정렬 */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* TailwindCSS 클래스로 스타일 적용 */}
        <h1 className="font-bold text-yellow-400 text-md">COSMIC</h1>
        <div className="flex space-x-4">
          {/* 아이콘들에 TailwindCSS 클래스로 스타일 적용 */}
          <ClientIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
