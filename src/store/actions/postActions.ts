/*import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsByKeyword = createAsyncThunk(
  "posts/fetchByKeyword",
  async (keyword: string) => {
    const response = await axios.get(`/api/posts?keyword=${keyword}`);
    return response.data;
  }
);*/

import { AppDispatch } from "../store";
import { setPosts } from "../slices/postSlice";

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("/api/posts"); // 예시 API 호출
    const data = await response.json();
    dispatch(setPosts(data)); // 포스트 목록 상태 업데이트
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
