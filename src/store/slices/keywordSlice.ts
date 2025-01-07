/*import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface KeywordState {
  selectedKeyword: string | null;
  keywords: string[];
}

const initialState: KeywordState = {
  keywords: [],
  selectedKeyword: null,
};

const keywordSlice = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    selectKeyword(state, action: PayloadAction<string>) {
      state.selectedKeyword = action.payload;
    },
    setKeywords(state, action: PayloadAction<string[]>) {
      state.keywords = action.payload;
    },
  },
});

export const { selectKeyword, setKeywords } = keywordSlice.actions;
export default keywordSlice.reducer;*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// keyword 배열을 관리하는 상태
interface KeywordState {
  selectedKeywords: string[]; // 여러 개의 선택된 키워드를 저장
}

const initialState: KeywordState = {
  selectedKeywords: [], // 초기 선택된 키워드가 없음
};

const keywordSlice = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      // 키워드 선택 시 중복 선택 방지 및 추가/제거 처리
      const keyword = action.payload;
      if (state.selectedKeywords.includes(keyword)) {
        state.selectedKeywords = state.selectedKeywords.filter(
          (k) => k !== keyword
        ); // 이미 선택된 키워드 제거
      } else {
        state.selectedKeywords.push(keyword); // 새로운 키워드 추가
      }
    },
  },
});

export const { setKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;
