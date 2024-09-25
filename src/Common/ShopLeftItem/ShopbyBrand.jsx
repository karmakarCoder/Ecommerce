import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setFilterData } from "../../Redux/Slice";

const ShopbyBrand = () => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.product);

  //   HandleBrand
  const HandleBrand = () => {
    setopen(!open);
  };

  const categorisData = (data, category) => {
    let newArry = data?.map((item) => {
      return item[category];
    });
    return (newArry = [...new Set(newArry)]);
  };

  const getCategory = categorisData(data.products, "category");

  const HandleBrandeName = (item) => {
    const filterData = data.products.filter((el) => {
      return el.category === item;
    });
    dispatch(setFilterData(filterData));
  };

  return (
    <>
      <div>
        <div className="container">
          <div
            className="flex items-center justify-between cursor-pointer mb-3 md:mb-8"
            onClick={HandleBrand}
          >
            <h2 className="font-DMsans font-bold text-lg md:text-xl text-primaryFontColor">
              Shop by Brand
            </h2>
            <span>
              {open ? (
                <IoMdArrowDropup className="text-xl" />
              ) : (
                <IoMdArrowDropdown className="text-xl" />
              )}
            </span>
          </div>
          {open ? (
            <div>
              {getCategory?.map(
                (item, index) =>
                  item !== undefined && (
                    <div
                      key={index}
                      className="py-4 border-b-2 border-[#F0F0F0] cursor-pointer"
                    >
                      <h5
                        onClick={() => HandleBrandeName(item)}
                        className="text-sm md:text-base font-DMsans font-normal text-secondaryFontColor"
                      >
                        {item}
                      </h5>
                    </div>
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ShopbyBrand;
