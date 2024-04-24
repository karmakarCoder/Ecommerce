import React from "react";
import Button from "./Button";

const AdsOverlay = ({ className, title, discount, tagline }) => {
  return (
    <>
      <div className={`absolute bottom-0 left-0 ${className}`}>
        <h2 className="text-3xl lg:text-4xl font-bold font-DMsans text-primaryFontColor pb-2 sm:pb-4 md:pb-2 lg:pb-6">
          {title ? title : "Sale"}
        </h2>
        <p className="whitespace-nowrap text-sm lg:text-base font-DMsans font-normal text-thirdFontColor pb-2 lg:pb-5">
          Up to{" "}
          <span className="font-bold text-primaryFontColor md:text-yellow-400 lg:text-primaryFontColor text-3xl lg:text-4xl align-middle px-1 sm:px-2">
            {discount ? discount : "00%"}
          </span>
          {tagline ? tagline : "Tagline"}
        </p>
        <Button
          className={
            "py-[9px] md:py-3 lg:py-4 px-[30px] md:px-12 lg:px-14 text-xs lg:text-sm"
          }
        >
          Shop Now
        </Button>
      </div>
    </>
  );
};

export default AdsOverlay;
