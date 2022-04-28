import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostsService from "src/services/postsService";
import { sortDate, sortRecent, sortTrending } from "./utils";

const initialState = {
  posts: [],
  sortBy: null,
  sortOrder: null,
  loading: false,
};

export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  return await PostsService.getPosts();
});

export const likeAPost = createAsyncThunk("post/like", async (postId) => {
  return PostsService.likeAPost(postId);
});

export const disLikeAPost = createAsyncThunk("post/dislike", async (postId) => {
  return PostsService.disLikeAPost(postId);
});

export const postAComment = createAsyncThunk(
  "post/comment",
  async ({ postId, comment }) => {
    return await PostsService.createComment(postId, {
      commentData: { content: comment },
    });
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortByDate: (state, action) => {
      state.sortBy = "Date";
      state.sortOrder = action.payload;
      state.posts = state.posts.sort(sortDate(state.sortOrder));
    },
    sortByTrending: (state) => {
      state.sortBy = "Trending";
      state.posts = state.posts.sort(sortTrending);
    },
    sortByRecent: (state) => {
      state.sortBy = "Recent";
      state.posts = state.posts.sort(sortRecent);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.loading = false;
      })
      .addCase(likeAPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(disLikeAPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(postAComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      });
  },
});

const { actions, reducer } = postsSlice;
export const { sortByDate, sortByRecent, sortByTrending } = actions;
export { actions, reducer as default };
