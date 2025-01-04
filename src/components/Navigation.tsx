import React from "react";
import "../styles/navigation.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white p-4 text-center">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
