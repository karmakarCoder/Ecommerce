import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/Slice";
import cartSlice, { getTotal } from "../Redux/AddToCartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

Store.dispatch(getTotal());
