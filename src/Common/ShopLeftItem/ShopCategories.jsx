import React, { useState, useEffect } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import { FcDislike } from "react-icons/fc";

const ShopCategories = ({ categoriesData, categoriesTitle }) => {
  // ======= all state ========
  const [categories, setcategories] = useState(false);
  // =========================

  // HandleSubCategory

  const HandleSubCategory = (id) => {
    if (id) {
      setcategories(true);
    } else {
      setcategories(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="container">
          <div>
            <h2 className="pb-3 text-lg font-bold md:text-xl font-DMsans text-primaryFontColor md:pb-9">
              {categoriesTitle ? categoriesTitle : null}
            </h2>
          </div>
          <div className="py-2">
            {categoriesData?.map((item, index) =>
              item.subcategories.length > 0 ? (
                <div key={item.id}>
                  <div
                    key={item.id}
                    className={`flex items-center justify-between cursor-pointer border-b-2 border-[#F0F0F0]`}
                    onClick={() => HandleSubCategory(index)}
                  >
                    <h4
                      key={item.id}
                      className="py-5 text-sm font-normal capitalize md:text-base font-DMsans text-secondaryFontColor"
                    >
                      {item.title}
                    </h4>
                    {item.subcategories[index] ? (
                      <RiArrowDropUpFill className="text-3xl transition-all text-secondaryFontColor" />
                    ) : (
                      <RiArrowDropDownFill className="text-3xl transition-all text-secondaryFontColor" />
                    )}
                  </div>
                  <div className="bg-[#2020201a]">
                    {item.subcategories[index] &&
                      item.subcategories.map(
                        (subitem) =>
                          subitem !== item.title &&
                          categories === true && (
                            <h2
                              key={subitem}
                              className="py-2 pl-2 text-sm font-normal capitalize border-b-2 border-white cursor-pointer md:text-base font-DMsans text-secondaryFontColor hover:text-red-700"
                            >
                              {subitem ? subitem : "item"}
                            </h2>
                          )
                      )}
                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="cursor-pointer border-b-2 border-[#F0F0F0]"
                >
                  <h4
                    key={item.id}
                    className="py-5 text-base font-normal font-DMsans text-secondaryFontColor"
                  >
                    {item.title}
                  </h4>
                  <div>{item.id === 1 && <FcDislike />}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCategories;
