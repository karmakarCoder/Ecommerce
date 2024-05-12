import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { fetchData } from "../../Redux/Slice/ProductSlice/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [EachProduct, setEachProduct] = useState();

  useEffect(() => {
    dispatch(fetchData("https://dummyjson.com/products/1"));
  }, []);

  const { data, status } = useSelector((state) => state.allProduct);
  console.log(data);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setEachProduct(data.payload);
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
            <picture>
              <img src="" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
