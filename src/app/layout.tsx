import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          {/* 여기에 메타 태그, 링크 등 다른 헤드 요소들을 추가할 수 있습니다 */}
          <meta charSet="UTF-8" />
          <title>COSMIC</title>
        </head>
        <body>
          <div className="flex flex-col min-h-screen">
            {/* 상단 헤더 */}
            <Header />

            {/* 페이지의 고유 콘텐츠 */}
            <main className="flex-1">{children}</main>

            {/* 하단 네비게이션 */}
            <Navigation />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
