import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../Redux/Slice";
import { useParams } from "react-router-dom";
import ProductImg from "../../Common/ProductDetailscomponent/ProductImg";
import ProductInfo from "../../Common/ProductDetailscomponent/ProductInfo";
import { addtoCart } from "../../Redux/AddToCartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [EachProductData, setEachProductData] = useState({});
  const { productID } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(`https://dummyjson.com/product/${productID}`));
  }, []);
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setEachProductData(data);
    }
  }, [data, status]);

  //
  const HandleCart = () => {
    dispatch(addtoCart(EachProductData));
  };

  return (
    <>
      <div className="container  px-4 lg:px-0">
        <div className="pb-10 pt-2">
          <BreadCrumb />
        </div>

        <div>
          <ProductImg data={EachProductData} status={status} />
        </div>
        <div>
          <ProductInfo
            data={EachProductData}
            status={status}
            addtoCart={HandleCart}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
