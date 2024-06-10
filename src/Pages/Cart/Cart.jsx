import React, { useEffect } from "react";
import Breadcrumb from "../../Common/BreadCrumb/BreadCrumb";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  productIncreament,
  productDecreament,
  getTotal,
} from "../../Redux/AddToCartSlice";
import { TbShoppingCartOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartitem, totalAmount, totalCartitem } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cartitem]);

  // Product cart remove functionality
  const HandleRemove = (item) => {
    dispatch(removeCart(item));
  };

  // product quantity increament functionality

  const Handleincreament = (item) => {
    dispatch(productIncreament(item));
  };

  // product quantity decreament functionality

  const HandleDecreament = (item) => {
    dispatch(productDecreament(item));
  };

  return (
    <>
      <div className="py-28">
        <div className="container">
          <div>
            <div className="pb-12">
              <h1 className="font-DMsans font-bold text-5xl text-primaryFontColor">
                Cart
              </h1>
              <div className="pt-2">
                <Breadcrumb />
              </div>
            </div>
            <div className="flex">
              <div className="w-[35%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8 pl-5">Product</h4>
                </div>
              </div>

              {/* ========= */}
              <div className="w-[25%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Price</h4>
                </div>
              </div>

              <div className="w-[25%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Quantity</h4>
                </div>
              </div>

              {/* ============== */}
              <div className="w-[15%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Quantity</h4>
                </div>
              </div>
            </div>
            {/* =============== */}
            {cartitem.length > 0 ? (
              <div className="h-[500px] overflow-y-scroll scrollbar-thumb-red scrollbar-track-black scrollbar-thin">
                {cartitem?.map((item, index) => (
                  <div
                    className="flex items-center justify-between border-2"
                    key={index}
                  >
                    <div className="py-7 pl-5 flex items-center  w-[35%]">
                      <div
                        className="mr-7 text-xl cursor-pointer hover:scale-110 transition-all active:text-yellow-400"
                        onClick={() => HandleRemove(item)}
                      >
                        <RxCross2 />
                      </div>
                      <div className="w-[100px] h-[100px] rounded-md">
                        <img
                          src={item.thumbnail}
                          alt={item.thumbnail}
                          className="w-full h-full object-cover shadow-md"
                        />
                      </div>

                      <p className="pl-5 text-base font-DMsans font-bold text-primaryFontColor w-[60%] whitespace-nowrap text-ellipsis overflow-hidden">
                        {item.title ? item.title : "Product name"}
                      </p>
                    </div>
                    <div className="w-[25%] text-primaryFontColor font-DMsans font-bold text-xl">
                      <p>${Math.round(item.price ? item.price : "$0.00")}</p>
                    </div>
                    {/* ========= */}
                    <div className="flex items-center w-[25%]">
                      <div className="flex items-center gap-x-[41px]">
                        <div className="w-[100px] md:w-[120px] py-[7px] px-5 border-2 flex items-center justify-between">
                          <span
                            className="text-secondaryFontColor text-md md:text-xl cursor-pointer"
                            onClick={() => HandleDecreament(item)}
                          >
                            <FiMinus />
                          </span>
                          <p className="text-xs md:text-base font-normal text-secondaryFontColor font-DMsans">
                            {item.Quantity}
                          </p>
                          <span
                            className="text-secondaryFontColor text-md md:text-xl cursor-pointer"
                            onClick={() => Handleincreament(item)}
                          >
                            <GoPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[15%] text-primaryFontColor font-DMsans font-bold text-xl">
                      <p>${Math.round(item.Quantity * item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-[400px] bg-[#ececec75] border-2 relative">
                <div className="flex flex-col items-center  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <h4 className="font-DMsans font-semibold text-xl capitalize text-primaryFontColor opacity-75">
                    No product here
                  </h4>
                  <span>
                    <TbShoppingCartOff className="text-6xl text-primaryFontColor opacity-75" />
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="py-14 flex flex-col">
            <div className="basis-5/12">
              <div className="flex justify-end">
                <div className="basis-5/12">
                  <h4 className="flex justify-end text-primaryFontColor font-DMsans font-bold text-xl pb-6 ">
                    Cart totals
                  </h4>
                  <div className="">
                    <div className="flex">
                      <div className=" basis-6/12 border-2 py-[14px] pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                        Subtotal
                      </div>
                      <div className="  basis-6/12 border-2 py-[14px] pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                        ${totalAmount}
                      </div>
                    </div>
                    <div className="flex">
                      <div className=" basis-6/12 border-2 py-[14px] p-4 text-base font-DMsans font-bold text-primaryFontColor">
                        Total
                      </div>
                      <div className="  basis-6/12 border-2 py-[14px] pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                        ${totalAmount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end mt-7">
                <Link to={"/login"}>
                  <div className="cursor-pointer text-primaryBgColor font-DMsans font-bold text-sm py-4 px-6 bg-primaryFontColor">
                    <button className="text-primaryBgColor font-DMsans font-bold text-sm bg-primaryFontColor">
                      Proceed to Checkout
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
