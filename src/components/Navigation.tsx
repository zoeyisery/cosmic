import React from "react";
import "../styles/navigation.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed bottom-3 left-0 right-0 mx-auto w-11/12 sm:w-full md:w-5/12 lg:w-11/12 xl:w-11/12 bg-gray-800 text-white text-center rounded-full">
      <ul className="flex justify-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/post">Post</Link>
        <Link href="/community">Community</Link>
        <Link href="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
