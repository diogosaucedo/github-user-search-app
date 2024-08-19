import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../models";

type UserState = {
  users: User[];
};

const initialState: UserState = {
  users: [],
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.filter(
        (user) => user.login !== action.payload.login
      );
    },
  },
});

export const { addUser, deleteUser } = userReducer.actions;
export default userReducer.reducer;
