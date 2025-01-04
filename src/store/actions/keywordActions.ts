import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectKeyword } from "@/store/slices/keywordSlice";
import { closeModal } from "@/store/slices/modalSlice";

// 키워드 선택 및 모달 닫기 액션
export const handleKeywordSelection = createAsyncThunk(
  "keywords/handleSelection",
  async (keyword: string, { dispatch }) => {
    dispatch(selectKeyword(keyword)); // 키워드 상태 변경
    dispatch(closeModal()); // 모달 닫기
  }
);
