import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store"; // RootState 임포트
import { setKeyword, removeKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트

export const useKeywordManager = () => {
  const dispatch = useDispatch();
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // Redux에서 선택된 키워드 가져오기
  const [localKeywords, setLocalKeywords] = useState<string[]>([]); // 로컬 상태로 선택된 키워드 관리

  const handleKeywordSelect = (keyword: string) => {
    if (localKeywords.includes(keyword)) {
      // 이미 선택된 키워드라면 배열에서 제거
      setLocalKeywords(localKeywords.filter((item) => item !== keyword));
    } else {
      // 선택되지 않은 키워드라면 배열에 추가
      setLocalKeywords([...localKeywords, keyword]);
    }
  };

  const handleClose = () => {
    // 모달 닫을 때 Redux 상태 업데이트
    // 1. localKeywords에 있는 키워드들을 selectedKeywords로 반영
    localKeywords.forEach((keyword) => {
      if (!selectedKeywords.includes(keyword)) {
        dispatch(setKeyword([keyword])); // 선택된 키워드를 Redux에 추가
      }
    });

    // 2. selectedKeywords에서 localKeywords에 포함되지 않는 키워드는 제거
    selectedKeywords.forEach((keyword: string) => {
      if (!localKeywords.includes(keyword)) {
        dispatch(removeKeyword(keyword)); // 선택되지 않은 키워드를 Redux에서 제거
      }
    });
  };

  useEffect(() => {
    setLocalKeywords(selectedKeywords); // 모달 열릴 때 선택된 키워드를 초기화
  }, [selectedKeywords]); // selectedKeywords가 변경될 때마다 초기화

  return {
    selectedKeywords,
    localKeywords,
    handleKeywordSelect,
    handleClose,
  };
};
/*import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword, removeKeyword } from "../store/slices/keywordSlice"; // Redux 액션 임포트
import { RootState } from "../store/store"; // RootState 임포트

// 커스텀 훅: 키워드 관리
export const useKeywordManager = () => {
  const dispatch = useDispatch();
  const selectedKeywords = useSelector(
    (state: RootState) => state.keyword.selectedKeywords
  ); // Redux에서 선택된 키워드 가져오기
  const [localKeywords, setLocalKeywords] = useState<string[]>([]); // 로컬 상태로 선택된 키워드 관리

  // 키워드 선택/해제 처리
  const handleKeywordSelect = (keyword: string) => {
    if (localKeywords.includes(keyword)) {
      // 이미 선택된 키워드라면 배열에서 제거
      setLocalKeywords(localKeywords.filter((item) => item !== keyword));
    } else {
      // 선택되지 않은 키워드라면 배열에 추가
      setLocalKeywords([...localKeywords, keyword]);
    }
  };

  // 모달 닫을 때 키워드를 Redux 상태에 반영
  const handleClose = () => {
    // 1. localKeywords에 있는 키워드를 selectedKeywords로 반영
    localKeywords.forEach((keyword) => {
      if (!selectedKeywords.includes(keyword)) {
        dispatch(setKeyword([keyword])); // 선택된 키워드를 Redux에 추가
      }
    });

    // 2. selectedKeywords에서 localKeywords에 포함되지 않는 키워드는 제거
    selectedKeywords.forEach((keyword: string) => {
      if (!localKeywords.includes(keyword)) {
        dispatch(removeKeyword(keyword)); // 선택되지 않은 키워드를 Redux에서 제거
      }
    });
  };

  useEffect(() => {
    setLocalKeywords(selectedKeywords); // 모달 열릴 때 선택된 키워드를 초기화
  }, [selectedKeywords]); // selectedKeywords가 변경될 때마다 초기화

  return {
    selectedKeywords,
    localKeywords,
    handleKeywordSelect,
    handleClose,
  };
};*/
