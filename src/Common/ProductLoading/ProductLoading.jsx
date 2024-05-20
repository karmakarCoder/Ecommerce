import React from "react";
import Flex from "../Flex";
import { loadingProductData } from "../../../Data/Data";

const ProductLoading = () => {
  return (
    <Flex className={"flex-wrap gap-x-6 gap-y-8"}>
      {loadingProductData.map((item) => (
        <div
          className="relative w-[270px] md:w-[220px] lg:w-[270px]"
          key={item.id}
        >
          <div className="bg-[#bebebe] animate-pulse h-[190px]">
            <div className="absolute top-4 left-4 w-16 h-5 rounded-2xl bg-[#dddcdc] "></div>
          </div>
          <div>
            <div className="flex justify-between mt-2">
              <div className="bg-[#d6d6d6] w-24 h-3 rounded-3xl "></div>
              <div className="bg-[#c2c0c0] w-12 h-2 rounded-3xl"></div>
            </div>
          </div>
        </div>
      ))}
    </Flex>
  );
};

export default ProductLoading;
