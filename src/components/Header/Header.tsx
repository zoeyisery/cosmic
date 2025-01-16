"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /*const dispatch = useDispatch();
  const selectedKeyword = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // Redux에서 키워드 상태 가져오기*/

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /*const handleKeywordSelect = (keyword: string) => {
    dispatch(setKeyword(keyword)); // Redux 상태 업데이트
    closeModal();
  };*/

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>COSMIC</h1>
        <div className={styles.buttonContainer}>
          <button onClick={openModal}>
            <FontAwesomeIcon icon={faList} className="icon" />
          </button>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
};

export default Header;
