import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface KeywordState {
  selectedKeyword: string | null;
  keywords: string[];
}

const initialState: KeywordState = {
  keywords: [],
  selectedKeyword: null,
};

const keywordSlice = createSlice({
  name: "keyword",
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
export default keywordSlice.reducer;
