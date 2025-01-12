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
    setKeyword: (state, action: PayloadAction<string[]>) => {
      // action.payload는 선택된 키워드 배열입니다.
      const newKeywords = action.payload;

      // 기존 선택된 키워드와 새로운 키워드를 병합 (중복 없이)
      state.selectedKeywords = [
        ...new Set([...state.selectedKeywords, ...newKeywords]),
      ];
    },
    removeKeyword: (state, action: PayloadAction<string>) => {
      // 키워드 제거
      state.selectedKeywords = state.selectedKeywords.filter(
        (keyword) => keyword !== action.payload
      );
    },
  },
});

export const { setKeyword, removeKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;

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
