import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import ProductImg from "../../ProductDetailsComponent/ProductImg";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/Slice/ProductSlice/ProductSlice";

const ProductsDetails = () => {
  const [product, setproduct] = useState();
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("https://dummyjson.com/products/1"));
  }, []);

  const { data, status } = useSelector((state) => state.allProduct);
  console.log(status);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setproduct(data.payload);
    }
  }, [status.payload, data.payload]);

  return (
    <>
      <div>
        <div className="container">
          <div>
            <BreadCrumb />
          </div>

          <div>
            <ProductImg data={product.images && product.images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
