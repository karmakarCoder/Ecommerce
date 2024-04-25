import React, { useEffect } from "react";
import axios from "axios";
import ShopTop from "../Common/ShopRightitem/ShopTop";

const ShopRight = ({ className }) => {
  useEffect(() => {
    const Datafetcher = async () => {
      // const data = await axios.get("https://dummyjson.com/products");
      // console.log(data.data.products);
    };
    Datafetcher();
  }, []);
  return (
    <>
      <div className={className}>
        <div>
          <ShopTop />
        </div>
      </div>
    </>
  );
};

export default ShopRight;
