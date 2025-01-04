import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsByKeyword = createAsyncThunk(
  "posts/fetchByKeyword",
  async (keyword: string) => {
    const response = await axios.get(`/api/posts?keyword=${keyword}`);
    return response.data;
  }
);
