"use client";
import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store"; // store 경로에 맞게 설정

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>COSMIC</title>
        </head>
        <Provider store={store}>
          <body>
            <div className="w-full p-6 mx-auto bg-white rounded-lg shadow-xl sm:w-full md:w-5/12 lg:w-3/12 xl:w-3/12">
              <Header />
              <main> {children}</main>
              <Navigation />
            </div>
          </body>
        </Provider>
      </html>
    </>
  );
};

export default Layout;
