import React, { useState } from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Feature } from "../../../Data/Data";

const ShopTop = () => {
  const [feature, setfeature] = useState(false);

  const HandleFeature = () => {
    setfeature(!feature);
  };
  return (
    <>
      <div className="pb-[60px] flex items-center justify-end gap-x-4">
        <div className="flex items-center gap-x-2">
          <p className="text-base font-DMsans font-normal text-secondaryFontColor">
            Sort by:
          </p>
          <span className="cursor-pointer">
            <HiMiniSquares2X2 />
          </span>
        </div>
        <div className="relative py-1 px-5 border-2 border-[#F0F0F0] ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={HandleFeature}
          >
            <p className="text-base font-DMsans font-normal text-secondaryFontColor mr-28">
              Featured
            </p>
            <span>
              <MdArrowDropDown className="text-2xl text-secondaryFontColor" />
            </span>
          </div>
          {feature ? (
            <div className="bg-[#F0F0F0] w-full shadow-md absolute top-[37px] left-0 flex flex-col gap-y-1 rounded">
              {Feature.map((item) => (
                <div className="bg-white text-primaryFontColor text-md pl-2 font-DMsans font-medium py-2">
                  <Link>{item.title}</Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ShopTop;
