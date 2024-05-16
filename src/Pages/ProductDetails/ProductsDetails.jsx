import React, { createContext, useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import ProductImg from "../../ProductDetailsComponent/ProductImg";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/Slice/ProductSlice/ProductSlice";
export const imgContext = createContext();
const ProductsDetails = () => {
  const [EachProduct, setEachProduct] = useState({});
  const dispath = useDispatch();
  const { data, status } = useSelector((state) => state.allProduct);
  console.log(data);
  useEffect(() => {
    if (status.payload === "IDLE") {
      setEachProduct(data.payload);
    }
  }, [status, data]);
  useEffect(() => {
    dispath(fetchData("https://dummyjson.com/products/1"));
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div>
            <BreadCrumb />
          </div>

          <div>
            <imgContext.Provider value={EachProduct}>
              <ProductImg />
            </imgContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
