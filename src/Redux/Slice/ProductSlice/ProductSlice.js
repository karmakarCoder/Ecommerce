import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProduct: (state, payload) => {
      state.data = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
