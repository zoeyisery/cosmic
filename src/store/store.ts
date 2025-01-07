import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/store/slices/postSlice";
import keywordReducer from "@/store/slices/keywordSlice";

const store = configureStore({
  reducer: {
    posts: postReducer, // 게시물 상태 관리
    keyword: keywordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
