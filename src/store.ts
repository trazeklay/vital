import { configureStore } from "@reduxjs/toolkit";
import helloWorldReducer from "./slices/helloWorldSlice";

export const store = configureStore({
  reducer: {
    helloWorld: helloWorldReducer,
  },
});

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
