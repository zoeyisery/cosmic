"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store"; // store 경로에 맞게 설정
import Footer from "@/components/Footer/Footer";

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
            <div className="layout-container">
              <Header />
              <main> {children}</main>
              <Footer />
              <Navigation />
            </div>
          </body>
        </Provider>
      </html>
    </>
  );
};

export default Layout;
