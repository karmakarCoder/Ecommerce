import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const ShopbyBrand = ({ brandData }) => {
  const [data, setdata] = useState(brandData);
  const [open, setopen] = useState(false);

  //   HandleBrand
  const HandleBrand = () => {
    setopen(!open);
  };

  return (
    <>
      <div>
        <div className="container">
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={HandleBrand}
          >
            <h2 className="font-DMsans font-bold text-xl text-primaryFontColor">
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
              {data?.map((item) => (
                <div key={item.id} className="py-4 border-b-2 border-[#F0F0F0]">
                  <Link className="text-base font-DMsans font-normal text-secondaryFontColor">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ShopbyBrand;
