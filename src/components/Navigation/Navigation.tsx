import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faPenToSquare,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navLinks}>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} className={styles.icon} />
        </Link>
        <Link href="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </Link>
        <Link href="/post">
          <FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
        </Link>
        <Link href="/post">
          <FontAwesomeIcon icon={faBell} className={styles.icon} />
        </Link>
        <Link href="/auth">
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
