import { createSlice } from "@reduxjs/toolkit";
import { fetchHelloWorld } from "../thunks/helloWorldThunk";

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
