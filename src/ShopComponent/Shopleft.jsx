import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const Shopleft = ({ className }) => {
  const [allproducts, setallproducts] = useState([]);
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setallproducts(data.products);
    }
  }, [data.products, status]);

  // Category
  let categoryarr = [];
  let categoriesSet = new Set();
  allproducts?.map((product) => {
    if (!categoriesSet.has(product.category)) {
      categoryarr.push({
        id: product.id,
        title: product.category,
        subcategories: product.tags,
      });
      categoriesSet.add(product.category);
    }
  });

  // Brand Name
  let Brandarr = [];
  let BrandcategoriesSet = new Set();
  allproducts?.map((product) => {
    if (!BrandcategoriesSet.has(product.brand)) {
      Brandarr.push({
        id: product.id,
        title: product.brand,
      });
      categoriesSet.add(product.brand);
    }
  });

  // Price
  let priceArr = [];
  let priceCategorySet = new Set();
  allproducts?.map((product) => {
    if (!priceCategorySet.has(product.price)) {
      priceArr.push({
        id: product.id,
        title: product.price,
      });
      categoriesSet.add(product.price);
    }
  });
  console.log(priceArr);

  return (
    <>
      <div className={className}>
        <ShopCategories
          categoriesData={categoryarr ? categoryarr : []}
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
          <ShopbyBrand brandData={Brandarr ? Brandarr : []} />
        </div>
        <div>
          <ShopByPrice Price={priceArr ? priceArr : []} />
        </div>
      </div>
    </>
  );
};

export default Shopleft;
