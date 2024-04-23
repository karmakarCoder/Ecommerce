import React from "react";
import saleImg from "../../assets/sale.png";
import clockImg from "../../assets/clock.png";
import furnitureImg from "../../assets/furniture.png";
import AdsOverlay from "../../Common/AdsOverlay";
import Flex from "../../Common/Flex";

const Ads1 = () => {
  return (
    <>
      <div className="py-32 px-4 lg:px-0">
        <div className="container">
          <Flex className="flex-col md:flex-row items-center gap-x-10 gap-y-10">
            <div className="relative">
              <img src={saleImg} alt={saleImg} />
              <AdsOverlay
                className={"left-8 sm:left-16 bottom-[20px] sm:bottom-24 "}
                title={"Phones Sale"}
                discount={"30%"}
                tagline={"sale for all phones!"}
              />
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="relative">
                <img src={clockImg} alt={clockImg} />
                <AdsOverlay
                  className={"left-8 sm:left-16 bottom-3 sm:bottom-20"}
                  title={"Electronics Sale"}
                  discount={"70%"}
                  tagline={"sale for all electronics!"}
                />
              </div>
              <div className="relative">
                <img src={furnitureImg} alt={furnitureImg} />
                <AdsOverlay
                  className={"left-8 sm:left-16 bottom-4 sm:bottom-20"}
                  title={"Furniture Offer"}
                  discount={"50%"}
                  tagline={"sale for all furniture items!"}
                />
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Ads1;
