import React, { useContext } from "react";
import { imgContext } from "../Pages/ProductDetails/ProductsDetails";

const ProductImg = () => {
  const data = useContext(imgContext);
  console.log(data);
  return (
    <>
      {" "}
      <div>
        <img src="" alt="" />
      </div>{" "}
    </>
  );
};

export default ProductImg;
