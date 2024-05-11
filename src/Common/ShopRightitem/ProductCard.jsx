import React from "react";
import productImg from "../../assets/product8.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Card = ({
  className,
  colorVariant,
  badge,
  img,
  productTitle,
  price,
  discountPrice,
  rating,
  productDes,
  layout,
}) => {
  return (
    <>
      <div
        className={`cursor-pointer h-[302px]   ${
          layout ? "bg-[#f1f1f1] pr-3" : null
        }  ${className}`}
      >
        <div className="group relative overflow-hidden">
          <div className="absolute top-5 left-5 w-[400px]">{badge}</div>

          <img
            src={img ? img : productImg}
            alt={img}
            className={`h-[220px] sm:h-[220px]   ${
              layout ? "w-[255px] md:w-[200px] lg:w-[330px]" : "w-full"
            }`}
          />

          {/* =================Overlay================= */}

          <div className="py-6 px-7 flex flex-col items-center md:items-end absolute -bottom-40 left-0 bg-white w-full gap-y-5 group-hover:bottom-0 transition-all">
            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <h5 className="text-[#767676] font-DMsans hover:text-[#262626] sm:hover:font-bold transition-all text-sm md:text-base">
                Add to List
              </h5>
              <FaHeart />
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-6">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] sm:hover:font-bold transition-all text-sm md:text-base ">
                Compare
              </h5>
              <TbReload />
            </div>
            <div className="flex items-center gap-x-[7px] sm:gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] sm:hover:font-bold transition-all text-sm md:text-base">
                Add to Cart
              </h5>
              <FaShoppingCart />
            </div>
          </div>

          {/* =================Overlay================= */}
        </div>

        <div>
          <div
            className={`flex justify-between pt-6 sm:pt-3 sm:flex-row sm:items-start lg:flex-row  ${
              layout
                ? "sm:flex-col lg:flex-col lg:items-start md:pt-0 gap-y-4"
                : "lg:flex-row lg:items-center md:pt-6 gap-y-0"
            }`}
          >
            <h3 className="text-ellipsis whitespace-nowrap overflow-hidden text-primaryFontColor font-DMsans font-semibold text-sm sm:text-base md:text-xl">
              {productTitle ? productTitle : "Basic Crew Neck Tee"}
            </h3>
            {layout ? (
              <p className="w-[300px] md:w-[237px] lg:w-[500px]  text-ellipsis whitespace-wrap overflow-hidden">
                {productDes}
              </p>
            ) : null}

            <div className="flex items-center gap-x-2">
              <p className="text-sm font-DMsans font-normal text-thirdFontColor sm:text-sm line-through md:text-">
                {discountPrice ? discountPrice : null}
              </p>
              <p className="text-sm font-DMsans font-normal text-thirdFontColor sm:text-sm md:text-base">
                {price ? price : "$44.00"}
              </p>
            </div>
          </div>
          <span className="text-thirdFontColor font-DMsans font-normal text-xs pt-3 sm:text-sm md:text-base items-center flex gap-x-1 md:leading-[0]">
            <span>
              <FaStar className="text-yellow-500" />
            </span>
            {rating ? rating : null}
          </span>
        </div>

        {colorVariant && (
          <span className="text-thirdFontColor font-DMsans font-normal text-xs pt-3 sm:text-sm md:text-base">
            Black
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
