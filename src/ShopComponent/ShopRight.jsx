import React, { useEffect } from "react";
import axios from "axios";

const ShopRight = ({ className }) => {
  useEffect(() => {
    const Datafetcher = async () => {
      const data = await axios.get("https://dummyjson.com/products");
      console.log(data.data.products);
    };
    Datafetcher();
  }, []);
  return <div className={className}>ShopRight</div>;
};

export default ShopRight;
