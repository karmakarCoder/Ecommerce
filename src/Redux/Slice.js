import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const initialState = {
  data: {},
  status: apiStatus.IDLE,
};

// First, create the thunk
export const fetchProduct = createAsyncThunk(
  "allProductsData",
  async (apiUrl) => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProduct.pending, (state, action) => {
      // Add user to the state array
      state.status = apiStatus.LOADING;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = apiStatus.IDLE;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = apiStatus.ERROR;
    });
  },
});

export default productSlice.reducer;
