import React from "react";
import ShopCategories from "../Common/ShopLeftItem/ShopCategories";
import {
  categories,
  colorCategoriesData,
  brand,
  Price,
} from "../../Data/Data.js";
import ColorCategories from "../Common/ShopLeftItem/ColorCategories.jsx";
import ShopbyBrand from "../Common/ShopLeftItem/ShopbyBrand.jsx";

import ShopByPrice from "../Common/ShopLeftItem/ShopByPrice.jsx";

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
            className={"py-2 md:py-3"}
            colorData={colorCategoriesData ? colorCategoriesData : []}
            title={"Shop by Color"}
          />
        </div>
        <div>
          <ShopbyBrand brandData={brand ? brand : []} />
        </div>
        <div>
          <ShopByPrice Price={Price ? Price : []} />
        </div>
      </div>
    </>
  );
};

export default Shopleft;
