import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface HelloWorldState {
  message: string;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: HelloWorldState = {
  message: "",
  loading: false,
  error: null,
};

// Async Thunk to fetch data
export const fetchHelloWorld = createAsyncThunk(
  "helloWorld/fetchMessage",
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return response.data.title; // Using title as the message
  }
);

const helloWorldSlice = createSlice({
  name: "helloWorld",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHelloWorld.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHelloWorld.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(fetchHelloWorld.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default helloWorldSlice.reducer;
