import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>COSMIC</title>
        </head>
        <body>
          <div className="bg-white w-full sm:w-full md:w-5/12 lg:w-3/12 xl:w-3/12 p-6 rounded-lg shadow-xl mx-auto">
            <Header />
            <main> {children}</main>
            <Navigation />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
