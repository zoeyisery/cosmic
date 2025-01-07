/*import { createSlice } from "@reduxjs/toolkit";
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



export default postSlice.reducer;*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  content: string;
  keywords: string[];
}

interface PostState {
  selectedKeyword: string | null;
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
  selectedKeyword: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    filterPostsByKeyword: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        // null일 경우 포스트 목록을 초기 상태로 유지하거나 전체 포스트를 표시
        return;
      }
      // 키워드에 해당하는 포스트만 필터링
      state.posts = state.posts.filter((post) =>
        post.keywords.includes(action.payload)
      );
    },
    setKeyword: (state, action: PayloadAction<string | null>) => {
      state.selectedKeyword = action.payload;
    },
  },
});

export const { setPosts, filterPostsByKeyword, setKeyword } = postSlice.actions;
export default postSlice.reducer;
