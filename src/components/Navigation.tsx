import React from "react";
import "../styles/navigation.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faPenToSquare,
  faRightToBracket,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="fixed left-0 right-0 w-11/12 mx-auto text-center text-white bg-gray-800 rounded-full bottom-3 sm:w-full md:w-5/12 lg:w-11/12 xl:w-11/12">
      <ul className="flex justify-center space-x-10">
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} className="text-[16px]" />
        </Link>
        <Link href="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16px]" />
        </Link>
        <Link href="/post">
          <FontAwesomeIcon icon={faPenToSquare} className="text-[16px]" />
        </Link>
        <Link href="/community">
          <FontAwesomeIcon icon={faComments} />
        </Link>
        <Link href="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
