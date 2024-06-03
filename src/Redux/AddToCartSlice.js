import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";

const initialState = {
  cartitem: localStorage.getItem("cartitem")
    ? JSON.parse(localStorage.getItem("cartitem"))
    : [],
  totalCartitem: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.cartitem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex >= 0) {
        state.cartitem[findIndex].Quantity += 1;
        localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
        toast("Again Add", {
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
      } else {
        const tempo = { ...action.payload, Quantity: 1 };
        state.cartitem.push(tempo);
        localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
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
    removeCart: (state, action) => {
      const removeitem = state.cartitem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartitem = removeitem;
      localStorage.setItem("cartitem", JSON.stringify(state.cartitem));

      toast("remove", {
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
    productIncreament: (state, action) => {
      const findindex = state.cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findindex >= 0) {
        state.cartitem[findindex].Quantity += 1;
        localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
      }
    },
    productDecreament: (state, action) => {
      const findindex = state.cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartitem[findindex].Quantity > 1) {
        state.cartitem[findindex].Quantity -= 1;
        localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
      }
    },
    getTotal: (state, action) => {
      const totalPriceAmount = state.cartitem.reduce(
        (totalCart, cartItem) => {
          const { Quantity, price } = cartItem;
          const totalCartPrice = Quantity * price;
          totalCart.totalamount += Math.round(totalCartPrice);
          totalCart.totalItem += Quantity;
          return totalCart;
        },
        {
          totalamount: 0,
          totalItem: 0,
        }
      );
      state.totalCartitem = totalPriceAmount.totalItem;
      state.totalAmount = totalPriceAmount.totalamount;
    },
  },
});

export const {
  addtoCart,
  removeCart,
  productIncreament,
  productDecreament,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
