import React, { useState, useEffect } from "react";
import Card from "../../Common/Card";
import Slider from "react-slick";
import Button from "../../Common/Button";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../Redux/Slice.js";
import { addtoCart } from "../../Redux/AddToCartSlice";
const NewArrival = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct("https://dummyjson.com/products"));
  }, []);

  useEffect(() => {
    if (status === "IDLE") {
      setproductData(data.products);
    }
  }, [data, status]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "#979797",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          top: "40%",
          right: "0",
          transform: "translateY(-40%)",
        }}
        onClick={onClick}
      >
        <div>
          <GrFormNext className="text-4xl text-white" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "#979797",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          top: "40%",
          left: "0",
          transform: "translateY(-40%)",
          zIndex: "1",
        }}
        onClick={onClick}
      >
        <div>
          <GrFormPrevious className="text-4xl text-white" />
        </div>
      </div>
    );
  }

  // add to cart functionality
  const HandleCartAdd = (item) => {
    dispatch(addtoCart(item));
  };

  const [productData, setproductData] = useState([]);
  return (
    <>
      <div className="py-20 md:py-32 px-4 lg:px-0">
        <div className="container">
          <div>
            <h1 className="pb-12 text-primaryFontColor font-DMsans font-bold text-[30px] sm:text-[38px]">
              New Arrivals
            </h1>
          </div>

          <Slider {...settings}>
            {productData?.slice(6, productData.length).map((item) => {
              return (
                <Card
                  onCartAdd={() => HandleCartAdd(item)}
                  productId={item.id}
                  key={item.id}
                  badge={
                    item.discountPercentage > 0 ? (
                      <Button
                        className={
                          "py-[4px] px-3 sm:py-[6px] sm:px-5 text-xs sm:text-base"
                        }
                      >
                        {Math.floor(item.discountPercentage) + "%"
                          ? Math.floor(item.discountPercentage) + "%"
                          : "Stock out"}
                      </Button>
                    ) : null
                  }
                  img={item.thumbnail}
                  productTitle={item.title}
                  price={"$" + Math.round(item.price - item.discountPercentage)}
                  colorVariant={item.colorVariant ? item.colorVariant : null}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
