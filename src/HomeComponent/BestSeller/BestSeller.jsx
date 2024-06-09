import { React, useEffect, useState } from "react";
import Card from "../../Common/Card";
import Slider from "react-slick";
import Button from "../../Common/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../Redux/Slice";
import { addtoCart } from "../../Redux/AddToCartSlice";
const BestSeller = () => {
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
    arrows: false,
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

  // HandleCartAdd

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
              Our Bestsellers
            </h1>
          </div>

          <Slider {...settings}>
            {productData?.map((item) => {
              return (
                <Card
                  onCartAdd={() => HandleCartAdd(item)}
                  productId={item.id}
                  key={item.id}
                  badge={
                    item.discountPercentage ? (
                      <Button className={"py-[6px] px-5"}>
                        {Math.floor(item.discountPercentage) + "%"
                          ? Math.floor(item.discountPercentage) + "%"
                          : "Stock out"}
                      </Button>
                    ) : null
                  }
                  img={item.thumbnail}
                  productTitle={item.title}
                  price={
                    "$" + `${Math.round(item.price - item.discountPercentage)}`
                  }
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

export default BestSeller;
