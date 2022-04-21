import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersSlice";

const reducer = {
  users: userReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
