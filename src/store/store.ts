import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/store/slices/modalSlice";
import postReducer from "@/store/slices/postSlice";
import keywordReducer from "@/store/slices/keywordSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer, // 모달 상태 관리
    posts: postReducer, // 게시물 상태 관리
    keyword: keywordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
