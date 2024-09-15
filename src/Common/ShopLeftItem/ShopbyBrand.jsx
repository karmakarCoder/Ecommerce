import React, { useEffect, useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setporducts } from "../../Redux/Slice";

const ShopbyBrand = ({ brandData }) => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [brandName, setbrandName] = useState();

  //   HandleBrand
  const HandleBrand = () => {
    setopen(!open);
  };

  return (
    <>
      <div>
        <div className="container">
          <div
            className="flex items-center justify-between cursor-pointer mb-3 md:mb-8"
            onClick={HandleBrand}
          >
            <h2 className="font-DMsans font-bold text-lg md:text-xl text-primaryFontColor">
              Shop by Brand
            </h2>
            <span>
              {open ? (
                <IoMdArrowDropup className="text-xl" />
              ) : (
                <IoMdArrowDropdown className="text-xl" />
              )}
            </span>
          </div>
          {open ? (
            <div>
              {brandData?.map(
                (item) =>
                  item.title !== undefined && (
                    <div
                      key={item.id}
                      className="py-4 border-b-2 border-[#F0F0F0] cursor-pointer"
                    >
                      <h5 className="text-sm md:text-base font-DMsans font-normal text-secondaryFontColor">
                        {item.title}
                      </h5>
                    </div>
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ShopbyBrand;
