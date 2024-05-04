import { React, useState } from "react";
import Card from "../../Common/Card";
import { bestSellerData } from "../../../Data/Data";
import Slider from "react-slick";
import Button from "../../Common/Button";
const BestSeller = () => {
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

  const [productData, setproductData] = useState(bestSellerData);

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
            {productData.map((item) => {
              return (
                <Card
                  key={item.id}
                  badge={
                    item.discount ? (
                      <Button className={"py-[6px] px-5"}>
                        {item.discountStatus
                          ? item.discountStatus
                          : "Stock out"}
                      </Button>
                    ) : null
                  }
                  img={item.img}
                  productTitle={item.title}
                  price={item.price}
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
