import React, { useState } from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { Feature, pageShow } from "../../../Data/Data";

const ShopTop = ({ pageValue }) => {
  const [feature, setfeature] = useState(false);
  const [show, setshow] = useState(false);
  const [featureItem, setfeatureItem] = useState(false);
  const [Showitem, setShowitem] = useState(false);

  const HandleItem = (event) => {
    setfeatureItem(event.target.innerText);
    setfeature(false);
  };

  const HandleFeature = () => {
    setfeature(!feature);
    setshow(false);
  };

  const HandleShow = () => {
    setshow(!show);
    setfeature(false);
  };

  const HandleShowItem = (event) => {
    setShowitem(event.target.innerText);
    setshow(false);
  };

  return (
    <>
      <div className="pb-[60px] flex items-center justify-between gap-x-4">
        <div>
          <span className="cursor-pointer text-xl">
            <HiMiniSquares2X2 />
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <p className="text-base font-DMsans font-normal text-secondaryFontColor">
              Sort by:
            </p>
          </div>
          <div className="relative py-1 px-5 border-2 border-[#F0F0F0] w-[239px]">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={HandleFeature}
            >
              <p className="text-base font-DMsans font-normal text-secondaryFontColor">
                {featureItem ? featureItem : "Featured"}
              </p>
              <span>
                <MdArrowDropUp
                  className={`text-2xl text-secondaryFontColor ${
                    feature
                      ? "rotate-[0] transition-all duration-300"
                      : "rotate-[180deg] transition-all duration-300"
                  }`}
                />
              </span>
            </div>
            {feature ? (
              <div className="z-50 bg-[#F0F0F0] border-2 border-[#0000001f] w-full shadow-md absolute top-[40px] left-0 flex flex-col gap-y-1 rounded">
                {Feature.map((item) => (
                  <div
                    className="cursor-pointer active:bg-[#d3ac7138] hover:bg-white text-primaryFontColor text-md pl-2 font-DMsans font-medium py-2 "
                    onClick={HandleItem}
                  >
                    <Link>{item.title}</Link>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-x-2">
            <h4 className="text-base font-DMsans font-normal text-primaryFontColor">
              Show
            </h4>
            <div>
              <div className="relative py-1 px-4 border-2 border-[#F0F0F0] w-[140px]">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={HandleShow}
                >
                  <p className="text-base font-DMsans font-normal text-secondaryFontColor">
                    {Showitem ? Showitem : "9"}
                  </p>
                  <span>
                    <MdArrowDropUp
                      className={`text-2xl text-secondaryFontColor ${
                        show
                          ? "rotate-[0] transition-all duration-300"
                          : "rotate-[180deg] transition-all duration-300"
                      }`}
                    />
                  </span>
                </div>
                {show ? (
                  <div
                    onClick={pageValue}
                    className="z-50 bg-[#F0F0F0] border-2 border-[#0000001f] w-full shadow-md absolute top-[40px] left-0 flex flex-col gap-y-1 rounded"
                  >
                    {pageShow.map((item) => (
                      <div
                        key={item.id}
                        className="cursor-pointer active:bg-[#d3ac7138] hover:bg-white text-primaryFontColor text-md pl-2 font-DMsans font-medium py-2 "
                        onClick={HandleShowItem}
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopTop;
