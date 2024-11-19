import React, { useState, useEffect, useRef } from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { Feature, pageShow } from "../../../Data/Data";
import { FaList } from "react-icons/fa6";

const ShopTop = ({ pageValue, onChangeLayout, layoutValue, ref }) => {
  const [feature, setfeature] = useState(false);
  const [show, setshow] = useState(false);
  const [featureItem, setfeatureItem] = useState(false);
  const [Showitem, setShowitem] = useState(false);
  const shoptopRef = useRef();

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

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!shoptopRef.current.contains(e.target)) {
        setshow(false);
        setfeature(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className="pt-10 md:pt-0 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 items-start sm:items-center justify-between gap-x-4"
        ref={shoptopRef}
      >
        <div>
          <span
            className="hidden sm:block cursor-pointer text-xl"
            onClick={onChangeLayout}
          >
            {layoutValue ? <HiMiniSquares2X2 /> : <FaList />}
          </span>
        </div>
        <div className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row items-start gap-x-5">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <p className="text-base font-DMsans font-normal text-secondaryFontColor whitespace-nowrap">
                Sort by:
              </p>
            </div>
            <div className="relative py-1 px-5 border-2 border-[#F0F0F0] w-[160px] md:w-[188px] lg:w-[239px]">
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
                  {Feature.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer active:bg-[#d3ac7138] hover:bg-white text-primaryFontColor text-md pl-2 font-DMsans font-medium py-2 "
                      onClick={HandleItem}
                    >
                      <Link>{item.title}</Link>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <h4 className="text-base font-DMsans font-normal text-primaryFontColor">
              Show
            </h4>
            <div>
              <div className="relative py-1 px-4 border-2 border-[#F0F0F0] w-[100px] md:w-[120px] lg:w-[140px]">
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
