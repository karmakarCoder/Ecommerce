import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/Slice";
import cartSlice from "../Redux/AddToCartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});
