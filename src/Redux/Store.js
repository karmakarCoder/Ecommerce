import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/Slice";
import cartSlice, { getTotal } from "../Redux/AddToCartSlice";
import wishSlice from "../Redux/AddtoWishSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    wisList: wishSlice,
  },
});

Store.dispatch(getTotal());
