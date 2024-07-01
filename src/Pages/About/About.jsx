import React from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import img1 from "../../assets/about1.png";
import img2 from "../../assets/about2.png";

const About = () => {
  return (
    <>
      <div className="lg:py-24 py-10 px-4 lg:px-0">
        <div className="container">
          <div>
            <h1 className="text-[26px] lg:text-[49px] font-DMsans font-bold text-primaryFontColor pb-1">
              About
            </h1>
            <BreadCrumb />
          </div>
          <div className="flex flex-col sm:flex-row gap-y-6 md:gap-y-0 items-center justify-between pt-12 lg:pt-16">
            <img
              src={img1}
              alt=""
              className="w-[300px] lg:w-[450px] xl:w-[600px] cursor-pointer"
            />
            <img
              src={img2}
              alt=""
              className="w-[300px] lg:w-[450px] xl:w-[600px] cursor-pointer"
            />
          </div>
          <p className="font-DMsans font-normal lg:text-[39px] text-primaryFontColor pt-10 lg:pt-20">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </p>
          <div className="flex flex-col gap-y-6 md:gap-y-0 sm:flex-row items-center justify-between pt-20 gap-x-10">
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <h3 className="lg:text-2xl text-lg font-DMsans font-bold text-primaryFontColor">
                  Our Vision
                </h3>
                <p className="lg:text-base text-sm font-DMsans font-normal text-primaryFontColor pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
