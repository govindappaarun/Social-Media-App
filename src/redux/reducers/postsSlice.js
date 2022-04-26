import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostsService from "src/services/postsService";

const initialState = {
  posts: [],
  currentPost: [],
  comments: [],
  loading: false,
};

export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  return await PostsService.getPosts();
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers(builder) {},
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
