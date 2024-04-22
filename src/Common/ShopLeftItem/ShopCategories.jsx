import React, { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import { FcDislike } from "react-icons/fc";

const ShopCategories = ({ categoriesData, categoriesTitle }) => {
  // ======= all state ========
  const [subcategories, setsubcategories] = useState(
    categoriesData.map(() => false)
  );
  // =========================

  // HandleSubCategory

  const HandleSubCategory = (id) => {
    setsubcategories((previous) =>
      previous.map((value, index) => (id === index ? !value : false))
    );
  };

  return (
    <>
      <div>
        <div className="container">
          <div>
            <h2 className="text-xl font-DMsans font-bold text-primaryFontColor pb-9">
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
                      className="text-base font-DMsans font-normal text-secondaryFontColor py-5"
                    >
                      {item.title}
                    </h4>
                    {subcategories[index] ? (
                      <RiArrowDropUpFill className="text-secondaryFontColor transition-all text-3xl" />
                    ) : (
                      <RiArrowDropDownFill className="text-secondaryFontColor transition-all text-3xl" />
                    )}
                  </div>
                  <div>
                    {subcategories[index] &&
                      item.subcategories.map((subitem) => (
                        <h2
                          key={subitem.id}
                          className="text-base font-DMsans font-normal text-secondaryFontColor py-2 cursor-pointer"
                        >
                          {subitem.title}
                        </h2>
                      ))}
                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="cursor-pointer border-b-2 border-[#F0F0F0]"
                >
                  <h4
                    key={item.id}
                    className="text-base font-DMsans font-normal text-secondaryFontColor py-5"
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
