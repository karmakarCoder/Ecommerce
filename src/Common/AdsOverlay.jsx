import React from "react";
import Button from "./Button";

const AdsOverlay = ({ className, title, discount, tagline }) => {
  return (
    <>
      <div className={`absolute bottom-0 left-0 ${className}`}>
        <h2 className="text-3xl sm:text-4xl font-bold font-DMsans text-primaryFontColor pb-2 sm:pb-9 md:pb-3">
          {title ? title : "Sale"}
        </h2>
        <p className="whitespace-nowrap text-sm sm:text-base font-DMsans font-normal text-thirdFontColor pb-2 sm:pb-5">
          Up to{" "}
          <span className="font-bold text-primaryFontColor text-3xl sm:text-4xl align-middle px-1 sm:px-2">
            {discount ? discount : "00%"}
          </span>
          {tagline ? tagline : "Tagline"}
        </p>
        <Button className={"py-3 sm:py-4 px-12 sm:px-14 text-xs sm:text-sm"}>
          Shop Now
        </Button>
      </div>
    </>
  );
};

export default AdsOverlay;
