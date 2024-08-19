import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
