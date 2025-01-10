"use client"; // 클라이언트 측 렌더링을 위한 지시자

import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // 이메일 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태

  // 로그인 처리 함수
  const handleLogin = () => {
    // 간단한 입력값 검증 (실제 앱에서는 서버와 통신하여 인증 처리)
    if (email === "" || password === "") {
      setErrorMessage("Both fields are required.");
      return;
    }

    // 여기서 실제 로그인 API 호출 로직을 추가합니다.
    console.log("Logging in with", email, password);

    // 로그인 성공 후 처리
    alert("Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Login</h2>
        {errorMessage && (
          <p className="mb-2 text-sm text-red-500">{errorMessage}</p>
        )}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
