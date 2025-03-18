import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHelloWorld = createAsyncThunk(
    "helloWorld/fetchMessage",
    async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      return response.data.title; // Using title as the message
    }
);

