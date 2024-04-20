import React from "react";
import productImg from "../assets/product2.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

const Card = ({ colorVariant, badge, img, productTitle, price }) => {
  return (
    <>
      <div className="cursor-pointer  w-[90%]">
        <div className="group relative overflow-hidden">
          <div className="absolute top-5 left-5 text-black">{badge}</div>

          <img
            src={img ? img : productImg}
            alt={img}
            className="sm:w-full sm:h-[220px] md:h-auto"
          />

          {/* =================Overlay================= */}

          <div className="py-6 px-7 flex flex-col items-center md:items-end absolute -bottom-36 left-0 bg-white w-full gap-y-5 group-hover:bottom-0 transition-all">
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-DMsans hover:text-[#262626] hover:font-bold transition-all sm:text-sm md:text-base">
                Add to List
              </h5>
              <FaHeart />
            </div>
            <div className="flex items-center gap-x-8 md:gap-x-6">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all sm:text-sm md:text-base">
                Compare
              </h5>
              <TbReload />
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all sm:text-sm md:text-base">
                Add to Cart
              </h5>
              <FaShoppingCart />
            </div>
          </div>

          {/* =================Overlay================= */}
        </div>

        <div className="flex justify-between items-center pt-6 sm:pt-3 md:pt-6 sm:flex-col sm:items-start lg:flex-row lg:items-center">
          <h3 className="text-primaryFontColor font-DMsans font-semibold text-xl sm:text-base md:text-xl">
            {productTitle ? productTitle : "Basic Crew Neck Tee"}
          </h3>
          <p className="text-base font-DMsans font-normal text-thirdFontColor sm:text-sm md:text-base">
            {price ? price : "$44.00"}
          </p>
        </div>
        {colorVariant && (
          <span className="text-thirdFontColor font-DMsans font-normal text-base pt-3 sm:text-sm md:text-base">
            Black
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
