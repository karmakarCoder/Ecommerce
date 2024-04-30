import React from "react";
import FooterItem from "./FooterItem";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-14 px-4">
        <div className="container">
          <div className="flex  items-start justify-center flex-col sm:justify-between sm:flex-col md:flex-row px-4  lg:px-0">
            <div
              className="flex justify-between sm:w-full md:w-auto gap-x-10 md:gap-x-14 lg:gap-x-36
             pb-8 sm:gap-x-36"
            >
              <FooterItem
                title={"MENU"}
                allitem={["Home", "Shop", "About", "Contact", "Journal"]}
              />
              <FooterItem
                title={"SHOP"}
                allitem={[
                  "Category",
                  "Category",
                  "Category",
                  "Category",
                  "Category",
                ]}
              />
              <FooterItem
                title={"HELP"}
                allitem={[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Special E-shop",
                  "Shipping",
                  "Secure Payments",
                ]}
              />
            </div>
            <div className="flex items-center justify-between md:gap-x-[15px] lg:gap-x-[80px] w-full md:w-auto">
              <div className="pb-8 sm:pb-8 md:pb-0">
                <div className="text-[#262626] font-DMsans font-bold text-lg text-left">
                  <a href="tel:(052) 611-5711">(052) 611-5711</a>
                </div>
                <div className="text-[#262626] font-DMsans font-bold text-lg pb-3">
                  <a href="mailto:company@domain.com">company@domain.com</a>
                </div>

                <div className="text-[#6D6D6D] font-DMsans font-normal text-sm">
                  <p>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
              </div>
              <div>
                <picture className="cursor-pointer">
                  <img src={logo} alt={logo} />
                </picture>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 items-center justify-center sm:flex-row sm:justify-between sm:pt-10 md:pt-0">
            <div className="flex items-center gap-x-4 pt-10 sm:pt-0">
              <a
                href="#"
                className="h-10 w-10 rounded-full flex justify-center items-center hover:bg-[#316FF6] hover:text-white hover:-translate-y-1 transition-all"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full flex justify-center items-center hover:bg-[#0077b5] hover:text-white hover:-translate-y-1 transition-all"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full flex justify-center items-center hover:bg-[#bb3088] hover:text-white hover:-translate-y-1 transition-all"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
            <div>
              <p className="text-[#6D6D6D] font-DMsans font-normal text-sm text-center pt-2 sm:pt-0">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
