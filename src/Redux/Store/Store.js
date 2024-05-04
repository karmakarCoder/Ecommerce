import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slice/ProductSlice/ProductSlice";

export const Store = configureStore({
  reducer: {
    allProduct: ProductSlice,
  },
});
