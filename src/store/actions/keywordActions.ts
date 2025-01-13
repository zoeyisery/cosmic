import { AppDispatch } from "../store";
import { setKeyword, removeKeyword } from "../slices/keywordSlice";

// 키워드 선택 처리
export const selectKeyword = (keyword: string) => (dispatch: AppDispatch) => {
  dispatch(setKeyword([keyword])); // 선택된 키워드를 Redux 상태에 추가
};

// 키워드 제거 처리
export const deselectKeyword = (keyword: string) => (dispatch: AppDispatch) => {
  dispatch(removeKeyword(keyword)); // 선택되지 않은 키워드를 Redux 상태에서 제거
};
