import { createSlice } from "@reduxjs/toolkit";
import { fetchPostsByKeyword } from "../actions/postActions";

interface PostState {
  posts: { id: string; title: string; description: string }[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByKeyword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsByKeyword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default postSlice.reducer;
