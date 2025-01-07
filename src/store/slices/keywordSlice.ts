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

interface KeywordState {
  selectedKeyword: string | null;
}

const initialState: KeywordState = {
  selectedKeyword: null,
};

const keywordSlice = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.selectedKeyword = action.payload;
    },
    clearKeyword: (state) => {
      state.selectedKeyword = null;
    },
  },
});

export const { setKeyword, clearKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;
