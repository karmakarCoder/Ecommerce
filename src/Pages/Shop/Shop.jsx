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
            <h1 className="pb-3 text-4xl font-bold md:text-5xl text-primaryFontColor">
              Products
            </h1>
            <BreadCrumb />
          </div>

          <div className="flex flex-col justify-between py-16 gap-x-10 md:flex-row">
            <Shopleft className={"w-[100%] md:w-[30%] lg:w-[25%]"} />
            <ShopRight className={"w-[100%] md:w-[70%] lg:w-[75%]"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
