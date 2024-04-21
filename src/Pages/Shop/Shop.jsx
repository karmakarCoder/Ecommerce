import React from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import Shopleft from "../../ShopComponent/Shopleft";
import ShopRight from "../../ShopComponent/ShopRight";

const Shop = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="py-32">
            <h1 className="text-5xl font-bold text-primaryFontColor pb-3">
              Products
            </h1>
            <BreadCrumb />
          </div>

          <div className="flex py-16">
            <Shopleft className={"w-[25%] bg-red-700"} />

            <ShopRight className={"w-[75%] bg-green-600"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
