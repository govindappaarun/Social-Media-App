import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "src/services/userService";

const initialState = {
  users: [],
  currentUser: null,
  bookmarks: [],
  statsus: "idle",
  error: false,
};

export const getAllUsers = createAsyncThunk("users/getAll", async () => {
  return await UserService.getAllUsers();
});

export const followAUser = createAsyncThunk("users/follow", async (user) => {
  return await UserService.followUser(user._id);
});

export const getBookmarks = createAsyncThunk("users/bookmarks", async () => {
  return await UserService.getBookmarks();
});

export const doBookmark = createAsyncThunk("users/bookmark", async (postId) => {
  return await UserService.bookmarkAPost(postId);
});

export const doRemoveBookmark = createAsyncThunk(
  "users/removeBookmark",
  async (postId) => {
    return await UserService.removeBookmark(postId);
  }
);

export const unfollowAUser = createAsyncThunk(
  "users/unfollow",
  async (user) => {
    return await UserService.unfollowUser(user._id);
  }
);

const followUnfollowUser = (state, action) => {
  state.users = state.users.map((user) => {
    if (user._id === action.payload.followUser._id) {
      return action.payload.followUser;
    } else if (user._id === action.payload.user._id) {
      return action.payload.user;
    } else return user;
  });
};

const updateBookmarks = (state, action) => {
  state.bookmarks = action.payload.bookmarks;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = state.users.concat(action.payload.users);
      })
      .addCase(getBookmarks.fulfilled, updateBookmarks)
      .addCase(doBookmark.fulfilled, updateBookmarks)
      .addCase(doRemoveBookmark.fulfilled, updateBookmarks)
      .addCase(followAUser.fulfilled, followUnfollowUser)
      .addCase(unfollowAUser.fulfilled, followUnfollowUser);
  },
});

export default usersSlice.reducer;
