import { React, useEffect } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Wishlist = () => {
  return (
    <>
      <div className="py-24">
        <div className="container">
          <div className="pb-6">
            <h1 className="text-[48px] font-DMsans font-bold text-primaryFontColor pb-1 flex items-center gap-x-2">
              Wishlist
              <span>
                <FaHeart />
              </span>
            </h1>
            <BreadCrumb />
          </div>
          <div>
            <div className="flex">
              <div className="w-[35%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8 pl-5">Product</h4>
                </div>
              </div>

              {/* ========= */}
              <div className="w-[15%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Price</h4>
                </div>
              </div>

              <div className="w-[20%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Quantity</h4>
                </div>
              </div>

              {/* ============== */}
              <div className="w-[15%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Total</h4>
                </div>
              </div>
              {/* ========== */}
              <div className="w-[15%] text-base font-DMsans font-bold text-primaryFontColor">
                <div>
                  <h4 className="bg-[#F5F5F3] py-8">Cart</h4>
                </div>
              </div>
              {/* ============= */}
            </div>
            {/* ========== */}
            <div className="h-[500px] overflow-y-scroll scrollbar-thumb-red scrollbar-track-black scrollbar-thin">
              <div className="flex items-center justify-between border-2">
                <div className="py-7 pl-5 flex items-center w-[35%]">
                  <div className="mr-7 text-xl cursor-pointer hover:scale-110 transition-all active:text-yellow-400">
                    <RxCross2 />
                  </div>
                  <div className="w-[100px] h-[100px] rounded-md">
                    <img
                      src="../../assets/product5.png"
                      alt=""
                      className="w-full h-full object-cover shadow-md"
                    />
                  </div>

                  <p className="pl-5 text-base font-DMsans font-bold text-primaryFontColor w-[60%] whitespace-nowrap text-ellipsis overflow-hidden">
                    Product name
                  </p>
                </div>
                <div className="w-[15%] text-primaryFontColor font-DMsans font-bold text-xl">
                  <p>$</p>
                </div>
                {/* ========= */}
                <div className="flex items-center w-[15%]">
                  <div className="flex items-center gap-x-[41px]">
                    <div className="w-[100px] md:w-[120px] py-[7px] px-5 border-2 flex items-center justify-between">
                      <span className="text-secondaryFontColor text-md md:text-xl cursor-pointer">
                        <FiMinus />
                      </span>
                      <p className="text-xs md:text-base font-normal text-secondaryFontColor font-DMsans">
                        1
                      </p>
                      <span className="text-secondaryFontColor text-md md:text-xl cursor-pointer">
                        <GoPlus />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[10%] text-primaryFontColor font-DMsans font-bold text-xl">
                  <p>$</p>
                </div>
                <div className="w-[15%] text-primaryFontColor font-DMsans font-bold text-xl">
                  <p>$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
