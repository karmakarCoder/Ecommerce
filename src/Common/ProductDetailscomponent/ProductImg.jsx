import React from "react";

const ProductImg = ({ data, status }) => {
  return (
    <>
      <div className="py-4 md:py-10">
        {status === "LOADING" ? (
          <div className="flex flex-wrap items-center justify-between gap-y-10">
            <div className="w-[400px] h-[400px] bg-[#e6e6e6] animate-pulse"></div>
            <div className="w-[400px] h-[400px] bg-[#e6e6e6] animate-pulse"></div>
            <div className="w-[400px] h-[400px] bg-[#e6e6e6] animate-pulse"></div>
            <div className="w-[400px] h-[400px] bg-[#e6e6e6] animate-pulse"></div>
          </div>
        ) : status === "ERROR" ? (
          "Error"
        ) : (
          <div className="flex flex-wrap items-center gap-y-5 lg:gap-y-10 justify-between">
            {data.images?.slice(0, 4).map((img) => (
              <div
                key={img}
                className="md:h-[400px] h-[157px] w-[157px] md:w-[400px]  bg-[#dadada] border-white"
              >
                <img
                  src={img}
                  alt={img}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductImg;
