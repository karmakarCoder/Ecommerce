import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetcherData } from "../../Redux/Slice";

const ProductDetails = () => {
  const [EachProduct, setEachProduct] = useState();
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.product);

  console.log(status);
  useEffect(() => {
    dispatch(fetcherData("https://dummyjson.com/product/1"));
  }, []);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setEachProduct(data.payload);
    }
  }, [status.payload, data.payload]);

  return (
    <>
      <div className="container">
        <div className="pb-10">
          <BreadCrumb />
        </div>

        <div>
          {status.payload === "LOADING" ? (
            <h1>LOADING</h1>
          ) : (
            EachProduct && (
              <picture>
                <img src={EachProduct.images[0]} alt="" />
              </picture>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
