import React from "react";
import ShopCategories from "../Common/ShopLeftItem/ShopCategories";
import { categories, colorCategoriesData } from "../../Data/Data.js";
import ColorCategories from "../Common/ShopLeftItem/ColorCategories.jsx";

const Shopleft = ({ className }) => {
  return (
    <>
      <div className={className}>
        <ShopCategories
          categoriesData={categories ? categories : []}
          categoriesTitle={"Shop by Category"}
        />

        <div>
          <ColorCategories
            className={"pt-12"}
            colorData={colorCategoriesData ? colorCategoriesData : []}
            title={"Shop by Color"}
          />
        </div>
      </div>
    </>
  );
};

export default Shopleft;
