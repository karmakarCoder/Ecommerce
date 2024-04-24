import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import twoImg from "../../assets/2.png";
import slider1 from "../../assets/slider1.png";
import { FaTruck } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";

const Intro = () => {
  // slider settings
  var settings = {
    autoplay: false,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "100px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="dots w-[30px] py-[15px] border-r-4 border-black transition-all">
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          speed: 300,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#f5f7f9]">
        <Slider {...settings}>
          <div className="cursor-pointer">
            <img src={slider1} alt={slider1} />
          </div>
          <div className="cursor-pointer">
            <img src={slider1} alt={slider1} />
          </div>
          <div className="cursor-pointer">
            <img src={slider1} alt={slider1} />
          </div>
          <div className="cursor-pointer">
            <img src={slider1} alt={slider1} />
          </div>
        </Slider>
      </div>

      <div className="border-b-2 border-[#cccccc6b]">
        <div className="container">
          <div className="py-7 flex items-center justify-between px-4 lg:px-0">
            <div className="flex items-center gap-x-[3px] sm:gap-x-4">
              <img src={twoImg} alt={twoImg} />
              <p className="text-[9px] sm:text-base font-DMsans font-normal text-thirdFontColor">
                Two years warranty
              </p>
            </div>
            <div className="flex items-center gap-x-[3px] sm:gap-x-4">
              <FaTruck className="text-xl sm:text-2xl" />
              <p className="text-[9px] sm:text-base font-DMsans font-normal text-thirdFontColor">
                Free shipping
              </p>
            </div>
            <div className="flex items-center gap-x-[3px] sm:gap-x-4">
              <IoReloadOutline className="text-xl sm:text-2xl" />
              <p className="text-[9px] sm:text-base font-DMsans font-normal text-thirdFontColor">
                Return policy in 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
