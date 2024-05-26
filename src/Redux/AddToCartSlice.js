import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";
const initialState = {
  caritem: [],
  totalCartitem: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.caritem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.caritem[findIndex].Quantity += 1;
      } else {
        state.caritem.push({ ...action.payload, Quantity: 1 });
        toast("Add to cart done", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",

          transition: Bounce,
        });
      }
    },
  },
});

export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
