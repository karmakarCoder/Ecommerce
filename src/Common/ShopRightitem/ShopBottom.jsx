import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../ShopRightitem/ProductCard";
import Flex from "../Flex";
import Button from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { shopRightPageContext } from "../../ShopComponent/ShopRight";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProductLoading from "../ProductLoading/ProductLoading";
import Error from "../Error";
const ShopBottom = () => {
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  const pageValue = useContext(shopRightPageContext);
  const { showPage, gridLayout } = pageValue;
  const dispatch = useDispatch();

  // Data fetching
  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const response = await axios.get("https://dummyjson.com/products");
  //     const data = await response.data.products;
  //     setallProducts(data);
  //   };
  //   dataFetch();
  // }, []);

  // pagination functionality
  const HandlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / showPage) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      {status.payload == "LOADING" ? (
        <ProductLoading />
      ) : status.payload == "ERROR" ? (
        <Error />
      ) : (
        allProducts && (
          <div>
            <Flex
              className={
                "gap-x-4 flex-wrap justify-center sm:justify-between mx-auto items-center gap-y-8"
              }
            >
              {allProducts
                ?.slice(page * showPage - showPage, page * showPage)
                .map((productItem) => (
                  <Link
                    key={productItem.id}
                    to={`/product-details/${productItem.id}`}
                  >
                    <ProductCard
                      key={productItem.id}
                      layout={gridLayout}
                      className={` ${
                        gridLayout
                          ? "w-[100%] flex flex-row h-full gap-x-3 items-center"
                          : "w-[245px] sm:w-[285px] md:w-[228px] lg:w-[285px]"
                      }`}
                      productTitle={productItem.title}
                      productDes={productItem.description}
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
                  </Link>
                ))}
            </Flex>
          </div>
        )
      )}

      <Flex
        className={`pl-8 sm:pl-0 justify-between flex-col gap-y-5 md:gap-y-0 sm:flex-row items-center flex pt-12
        `}
      >
        <ul className="flex items-center gap-x-3">
          <li
            className={
              "w-[36px] h-[36px] border-2 border-[#F0F0F0] text-secondaryFontColor font-DMsans text-sm font-normal flex items-center justify-center hover:bg-primaryFontColor cursor-pointer hover:text-white transition-all"
            }
            onClick={() => HandlePagination(page - 1)}
          >
            <FaAngleLeft />
          </li>
          {[...new Array(Math.floor(allProducts.length / showPage) + 1)].map(
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
            Products from
            {page === 1
              ? page * showPage - showPage + 1
              : page * showPage - showPage}
            to
            {page === Math.floor(allProducts.length / showPage) + 1
              ? allProducts.length
              : page * showPage}
            of {allProducts.length}
          </p>
        </div>
      </Flex>
    </>
  );
};

export default ShopBottom;
