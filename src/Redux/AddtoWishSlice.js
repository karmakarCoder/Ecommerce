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
      state.status = ListStatus.LOADING;
      state.wishListData = action.payload;
      state.status = ListStatus.IDLE;
      toast("add", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  },
});

export const { addToWishList } = wishSlice.actions;

export default wishSlice.reducer;
