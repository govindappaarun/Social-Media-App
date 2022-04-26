import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./reducers/postsSlice";
import userReducer from "./reducers/usersSlice";

const reducer = {
  users: userReducer,
  userFeed: postsSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
