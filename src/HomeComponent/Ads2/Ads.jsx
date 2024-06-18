import React from "react";
import clockimg from "../../assets/bigClock.png";
import Button from "../../Common/Button";

const Ads = () => {
  return (
    <>
      <div className="pb-10 lg:pb-32">
        <div className="container">
          <div
            className="bg-[#f3f3f3] flex items-center justify-center py-3
           sm:py-5 sm:pr-5 md:py-0 md:px-0"
          >
            <div>
              <img
                src={clockimg}
                alt={clockimg}
                className="h-[16vh] w-[78vh] sm:h-auto"
              />
            </div>
            <div className="w-[696px]">
              <h2 className="text-md font-DMsans font-bold text-primaryFontColor pb-2 sm:text-3xl sm:pb-4 md:text-4xl md:pb-9">
                Phone of the year
              </h2>
              <p className="text-[10px] sm:text-sm md:text-base font-DMsans font-normal text-primaryFontColor pb-4 max-w-[510px] sm:pb-6 md:pb-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button className={"py-[6px] px-[16px] lg:py-4 lg:px-14"}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
