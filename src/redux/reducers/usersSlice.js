import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import UserService from "src/services/userService";

const initialState = {
  users: [],
  statsus: "idle",
  error: false,
};

export const getAllUsers = createAsyncThunk("users/getAll", async () => {
  return await UserService.getAllUsers();
});

export const followAUser = createAsyncThunk("users/follow", async (user) => {
  return await UserService.followUser(user._id);
});

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

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = state.users.concat(action.payload.users);
      })
      .addCase(followAUser.fulfilled, followUnfollowUser)
      .addCase(unfollowAUser.fulfilled, followUnfollowUser);
  },
});

export default usersSlice.reducer;
