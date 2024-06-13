import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../Redux/Slice";
import { useParams } from "react-router-dom";
import ProductImg from "../../Common/ProductDetailscomponent/ProductImg";
import ProductInfo from "../../Common/ProductDetailscomponent/ProductInfo";
import { addtoCart } from "../../Redux/AddToCartSlice";
import { addToWishList } from "../../Redux/AddtoWishSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [EachProductData, setEachProductData] = useState({});
  const { productID } = useParams();
  const navigate = useNavigate();

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

  const HandleaddToWish = () => {
    navigate("/wishlist");
    dispatch(addToWishList(EachProductData));
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
            HandleWishList={HandleaddToWish}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
