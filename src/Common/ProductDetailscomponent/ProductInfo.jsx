import React, { useState } from "react";
import RatingStar from "./RatingStar";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Review_Description from "./Review_Description";
import Loading from "./Loading";

const ProductInfo = ({ data, status, addtoCart }) => {
  const [sizeOpen, setsizeOpen] = useState(false);
  const [sizeValue, setsizeValue] = useState();
  const [featureOPen, setfeatureOPen] = useState(false);
  const [shipingOPen, setshipingOPen] = useState(false);

  const HandleSize = () => {
    setsizeOpen(!sizeOpen);
  };

  const HandleSizeValie = (e) => {
    setsizeValue(e.target.innerText);
    setsizeOpen(false);
  };

  const size = [
    {
      id: 1,
      value: "S",
    },
    {
      id: 2,
      value: "L",
    },
    {
      id: 3,
      value: "M",
    },
    {
      id: 4,
      value: "XL",
    },
    {
      id: 5,
      value: "XXL",
    },
  ];

  const color = [
    {
      id: 1,
      colorCode: "#979797",
    },
    {
      id: 2,
      colorCode: "#FF8686",
    },
    {
      id: 3,
      colorCode: "#7ED321",
    },
    {
      id: 4,
      colorCode: "#B6B6B6",
    },
    {
      id: 5,
      colorCode: "#15CBA5",
    },
  ];

  return (
    <>
      {status === "LOADING" ? (
        <Loading />
      ) : status === "ERROR" ? (
        "ERROR"
      ) : (
        <div>
          <h3 className="text-[24px] md:text-[39px] font-DMsans font-bold text-primaryFontColor">
            {data.title}
          </h3>

          <RatingStar
            rating={data.rating}
            ratingNumber={
              <p className="text-xs md:text-sm font-DMsans font-normal text-secondaryFontColor">
                {data.rating >= Math.floor(data.rating)
                  ? `${Math.floor(data.rating)}.5`
                  : `${Math.floor(data.rating)}`}
                <span className="pl-2">Review</span>
              </p>
            }
          />

          <div className="flex items-center gap-x-5">
            <span className="text-sm md:text-base font-DMsans font-normal text-secondaryFontColor line-through">
              ${data.price}
            </span>
            <span className="font-DMsans font-bold text-primaryFontColor text-md md:text-xl">
              {`$${Math.floor(data.price - (data.price * data.discountPercentage) / 100)} `}
            </span>
          </div>

          <div className="border-y-2 py-8  mt-6">
            <div className=" inline-block">
              {/* Color   */}
              <div className=" flex items-center gap-x-16">
                <h3 className="font-DMsans font-bold text-primaryFontColor text-sm md:text-base">
                  COLOR:
                </h3>
                <div className="flex items-center gap-x-4">
                  {color?.map((color) => (
                    <div
                      className="w-3 h-3 md:w-5 md:h-5 rounded-full  cursor-pointer hover:scale-110 transition-all"
                      style={{ background: `${color.colorCode}` }}
                    ></div>
                  ))}
                </div>
              </div>
              {/* Size */}
              <div className="flex items-center gap-x-[86px] py-7 cursor-pointer">
                <h3 className="font-DMsans font-bold text-primaryFontColor text-sm md:text-base">
                  SIZE:
                </h3>
                <div className="relative">
                  <div
                    className="flex items-center justify-between w-[120px] md:w-[139px] py-1 px-5 border-2"
                    onClick={HandleSize}
                  >
                    <span className="text-xs md:text-base font-normal text-secondaryFontColor font-DMsans">
                      {sizeValue ? sizeValue : "Size"}
                    </span>
                    <MdOutlineArrowDropDown
                      className={`text-secondaryFontColor text-2xl md:text-3xl ${sizeOpen ? "rotate-[180deg] transition-all duration-200" : "rotate-0 transition-all duration-200"}`}
                    />
                  </div>
                  {sizeOpen && (
                    <div className="absolute top-[47px] left-0 w-[139px] bg-[#f0f0f0]">
                      {size?.map((item, index) => (
                        <p
                          key={index}
                          className="border-b py-2 px-2"
                          onClick={HandleSizeValie}
                        >
                          {item.value}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* QUANTITY */}
              <div className="flex items-center gap-x-[41px]">
                <h3 className="font-DMsans font-bold text-primaryFontColor text-sm md:text-base">
                  QUANTITY:
                </h3>
                <div className="w-[129px] md:w-[139px] py-[7px] px-5 border-2 flex items-center justify-between">
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
          </div>
          {/* Status */}
          <div className="py-6 border-b flex items-center gap-x-7">
            <h3 className="font-DMsans font-bold text-primaryFontColor text-sm md:text-base">
              STATUS:
            </h3>
            <p className="text-sm md:text-base font-DMsans font-normal text-secondaryFontColor">
              {data.stock <= 0 ? (
                <span className="text-red-400 font-DMsans font-normal">
                  Stock out
                </span>
              ) : (
                "In stock"
              )}
            </p>
          </div>
          {/* Wish List , Add to Cart btn */}
          <div className="flex items-center justify-center md:justify-start gap-x-5 py-7">
            <button className="w-[120px] md:w-[200px] text-xs md:text-sm font-DMsans font-bold px-[10px] md:px-[40px] py-[15px] md:py-[20px] border-2 border-primaryFontColor text-primaryFontColor relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primaryFontColor after:-z-10 after:text-primaryBgColor after:duration-200 after:origin-top after:scale-y-0 after:transition-transform hover:after:scale-y-100 hover:after:origin-bottom hover:text-primaryBgColor">
              Add to Wish List
            </button>
            <button
              onClick={addtoCart}
              className="w-[120px] md:w-[200px] text-sm font-DMsans border-2 border-primaryFontColor font-bold px-[10px] md:px-[40px] py-[15px] md:py-[20px] bg-primaryFontColor text-primaryBgColor hover:bg-[#353535] active:bg-[#000000] active:scale-95 active:transition-all"
            >
              Add to Cart
            </button>
          </div>

          {/* FEATURES  & DETAILS */}
          <div
            className="border-y-2 py-4 md:py-6 cursor-pointer"
            onClick={() => setfeatureOPen(!featureOPen)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm md:text-lg font-DMsans font-bold text-primaryFontColor">
                FEATURES & DETAILS
              </h4>
              <span>{featureOPen ? <FiMinus /> : <GoPlus />}</span>
            </div>
            {featureOPen && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>
          {/*SHIPPING & RETURNS  */}
          <div
            className="border-b-2 py-4 md:py-6 cursor-pointer"
            onClick={() => setshipingOPen(!shipingOPen)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm md:text-lg font-DMsans font-bold text-primaryFontColor">
                SHIPPING & RETURNS
              </h4>
              <span>{shipingOPen ? <FiMinus /> : <GoPlus />}</span>
            </div>
            {shipingOPen && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>

          {/* Description , Reviews */}
          <Review_Description data={data} />
        </div>
      )}
    </>
  );
};

export default ProductInfo;
