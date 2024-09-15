import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";

const ListStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const initialState = {
  wishListData: localStorage.getItem("wishListData")
    ? JSON.parse(localStorage.getItem("wishListData"))
    : [],
  status: ListStatus.IDLE,
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wishListData = action.payload;
      console.log(action.payload);
      localStorage.setItem("wishListData", JSON.stringify(action.payload));
      toast("add", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },
  },
});

export const { addToWishList } = wishSlice.actions;

export default wishSlice.reducer;
