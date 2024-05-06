import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { json } from "react-router-dom";
const apiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const initialState = {
  data: [],
  status: apiStatus.IDLE,
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProduct: (state, payload) => {
      state.data = payload;
    },
    setStatus: (state, payload) => {
      state.status = payload;
    },
  },
});

// thunk function for get data

export const fetchData = () => {
  return async function getData(dispatch, getState) {
    try {
      dispatch(setStatus(apiStatus.LOADING));
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const allProduct = data.products;
      dispatch(setProduct(allProduct));
      dispatch(setStatus(apiStatus.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(apiStatus.ERROR));
    }
  };
};

// Action creators are generated for each case reducer function
export const { setProduct, setStatus } = ProductSlice.actions;

export default ProductSlice.reducer;
