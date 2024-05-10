import React from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import Shopleft from "../../ShopComponent/Shopleft";
import ShopRight from "../../ShopComponent/ShopRight";

const Shop = () => {
  return (
    <>
      <div className="px-4">
        <div className="container">
          <div className="py-9 md:py-32">
            <h1 className="text-4xl md:text-5xl font-bold text-primaryFontColor pb-3">
              Products
            </h1>
            <BreadCrumb />
          </div>

          <div className="flex py-16 gap-x-10 flex-col md:flex-row justify-between">
            <Shopleft className={"w-[100%] md:w-[30%] lg:w-[25%]"} />
            <ShopRight className={"w-[100%] md:w-[70%] lg:w-[75%]"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
