import React from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import img1 from "../../assets/about1.png";
import img2 from "../../assets/about2.png";

const About = () => {
  return (
    <>
      <div className="py-24">
        <div className="container">
          <div>
            <h1 className="text-[49px] font-DMsans font-bold text-primaryFontColor pb-1">
              About
            </h1>
            <BreadCrumb />
          </div>
          <div className="flex items-center justify-between pt-16">
            <img src={img1} alt="" className="max-w-[600px] cursor-pointer" />
            <img src={img2} alt="" className="max-w-[600px] cursor-pointer" />
          </div>
          <p className="font-DMsans font-normal text-[39px] text-primaryFontColor pt-20">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </p>
          <div className="flex items-center justify-between pt-20 gap-x-10">
            <div>
              <h3 className="text-2xl font-DMsans font-bold text-primaryFontColor">
                Our Vision
              </h3>
              <p className="text-base font-DMsans font-normal text-primaryFontColor pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-DMsans font-bold text-primaryFontColor">
                Our Story
              </h3>
              <p className="text-base font-DMsans font-normal text-primaryFontColor pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-DMsans font-bold text-primaryFontColor">
                Our Brands
              </h3>
              <p className="text-base font-DMsans font-normal text-primaryFontColor pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
