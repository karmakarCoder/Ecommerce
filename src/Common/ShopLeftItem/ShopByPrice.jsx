import React from "react";

const ShopByPrice = ({ Price }) => {
  return (
    <>
      <div className="pt-[10px] md:pt-[53px]">
        <div className="container">
          <div>
            <h2 className="font-DMsans font-bold text-primaryFontColor text-lg md:text-xl">
              Shop by Price
            </h2>
          </div>
          <div className="pt-4">
            {Price?.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer border-b-2 border-[#F0F0F0]"
              >
                <h2
                  key={item.id}
                  className="my-4 md:my-7 text-sm md:text-base font-DMsans font-normal text-secondaryFontColor"
                >
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByPrice;
