import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../ShopRightitem/ProductCard";
import axios from "axios";
import Flex from "../Flex";
import Button from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { shopRightPageContext } from "../../ShopComponent/ShopRight";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  setProduct,
} from "../../Redux/Slice/ProductSlice/ProductSlice";
import ProductLoading from "../ProductLoading/ProductLoading";
const ShopBottom = () => {
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  const pageValue = useContext(shopRightPageContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { data, status } = useSelector((state) => state.allProduct);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload);
    }
  }, [status.payload, data.payload]);

  console.log(allProducts);

  // useEffect(() => {
  //   const Datafetcher = async () => {
  //     const allData = await axios.get("https://dummyjson.com/products");
  //     setallProducts(allData.data.products);

  //     // set data on redux
  //     dispatch(setProduct(allData.data.products));
  //   };

  //   Datafetcher();
  // }, []);

  const HandlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / pageValue) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <Flex className={"gap-x-4 flex-wrap justify-between gap-y-8"}>
        <h1 className="text-red-600 bg-black w-full py-3 px-4 font-bold font-DMsans text-4xl">
          {status.payload}
        </h1>
        {allProducts
          ?.slice(page * pageValue - pageValue, page * pageValue)
          .map((productItem) => (
            <ProductCard
              key={productItem.id}
              className={"w-[285px]"}
              productTitle={productItem.title}
              img={productItem.thumbnail}
              badge={
                productItem.discountPercentage ? (
                  <Button className={"py-[7px] px-6"}>
                    {productItem.stock === 0
                      ? "Stock out"
                      : "-" + " $ " + productItem.discountPercentage}
                  </Button>
                ) : null
              }
              price={`$${productItem.price - productItem.discountPercentage}`}
              rating={productItem.rating}
              discountPrice={productItem.price}
            />
          ))}
      </Flex>
      <Flex className={"justify-between items-center pt-12"}>
        <ul className="flex items-center gap-x-3">
          <li
            className={
              "w-[36px] h-[36px] border-2 border-[#F0F0F0] text-secondaryFontColor font-DMsans text-sm font-normal flex items-center justify-center hover:bg-primaryFontColor cursor-pointer hover:text-white transition-all"
            }
            onClick={() => HandlePagination(page - 1)}
          >
            <FaAngleLeft />
          </li>
          {[...new Array(Math.floor(allProducts.length / pageValue) + 1)].map(
            (item, index) => (
              <li
                key={index}
                className={`w-[36px] h-[36px] border-2 border-[#F0F0F0] text-secondaryFontColor font-DMsans text-sm font-normal flex items-center justify-center hover:bg-primaryFontColor cursor-pointer hover:text-white transition-all ${
                  index + 1 === page
                    ? "bg-primaryFontColor text-white"
                    : "bg-transparent"
                }`}
                onClick={() => HandlePagination(index + 1)}
              >
                {index + 1}
              </li>
            )
          )}
          <li
            className={
              "w-[36px] h-[36px] border-2 border-[#F0F0F0] text-secondaryFontColor font-DMsans text-sm font-normal flex items-center justify-center hover:bg-primaryFontColor cursor-pointer hover:text-white transition-all"
            }
            onClick={() => HandlePagination(page + 1)}
          >
            <FaAngleRight />
          </li>
        </ul>
        <div>
          <p className="font-DMsans text-sm font-normal text-secondaryFontColor">
            Products from{" "}
            {page == 1
              ? page * pageValue - pageValue + 1
              : page * pageValue - pageValue}{" "}
            to{" "}
            {page === Math.floor(allProducts.length / pageValue) + 1
              ? allProducts.length
              : page * pageValue}
            of {allProducts.length}
          </p>
        </div>
      </Flex>
    </>
  );
};

export default ShopBottom;
