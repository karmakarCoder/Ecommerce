import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/Slice";
export const Store = configureStore({
  reducer: {
    product: productSlice,
  },
});
