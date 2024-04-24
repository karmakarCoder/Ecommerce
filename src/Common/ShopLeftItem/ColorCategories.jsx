import React, { useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";

import FLex from "../../Common/Flex";
import Flex from "../../Common/Flex";

const ColorCategories = ({ className, title, colorData }) => {
  const [open, setopen] = useState(false);
  const HandleColor = () => {
    setopen(!open);
  };

  return (
    <>
      <div className={className}>
        <div className="container">
          <div onClick={HandleColor}>
            <FLex className="items-center justify-between cursor-pointer mb-8">
              <h2 className="text-xl font-DMsans font-bold text-primaryFontColor">
                {title ? title : "!wrong"}
              </h2>
              <span className="text-xl">
                {open ? (
                  <RiArrowUpSFill />
                ) : (
                  <MdOutlineArrowDropDown className="text-2xl" />
                )}
              </span>
            </FLex>
          </div>

          <div>
            {colorData?.map((item) =>
              open ? (
                <div>
                  <Flex
                    key={item.id}
                    className="border-b-2 border-[#F0F0F0] py-4 items-center gap-x-2 "
                  >
                    <div
                      className="w-3 h-3 bg-black rounded-full "
                      style={{ background: `${item.colorCode}` }}
                    ></div>
                    <h5 className="text-base font-DMsans font-normal text-secondaryFontColor">
                      {item.title}
                    </h5>
                  </Flex>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorCategories;
