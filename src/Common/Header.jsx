import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import Search from "../Common/Search";

const Header = () => {
  // ======== all state =========
  const [opencategory, setopencategory] = useState(false);
  const [openNav, setopenNav] = useState(false);

  // handleNav
  const handleNav = () => {
    setopenNav(!openNav);
  };

  // handleCategory
  const handleCategory = () => {
    setopencategory(!opencategory);
  };
  // ============================
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="relative flex items-center py-8 justify-between px-4 lg:px-0">
            <div>
              <img src={logo} alt={logo} />
            </div>
            <div className="m-auto hidden sm:block">
              <ul
                className="flex items-center gap-x-10 justify-center
              "
              >
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Journal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className="block sm:hidden cursor-pointer text-xl"
              onClick={handleNav}
            >
              <span>{openNav ? <RxCross2 /> : <FaBars />}</span>
            </div>
            {/* =============================== */}
            <div
              className={`sm:hidden absolute top-0 pt-7 bg-white z-[999] w-1/2 h-screen shadow-lg ${
                openNav
                  ? "left-0 transition-all duration-[0.8s]"
                  : "left-[-190px] transition-all duration-[0.8s]"
              }`}
            >
              <ul
                className="flex items-start flex-col gap-y-6 justify-center pl-6
              "
              >
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Journal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
              <div className="pl-6 pt-12">
                <img src={logo} alt={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============== Bottom ============= */}
      <div className="bg-[#F5F5F3]">
        <div className="container">
          <div className="flex items-center justify-between py-6 px-4 lg:px-0">
            <div className="relative">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={handleCategory}
              >
                <span>
                  <HiBars2 className="text-2xl sm:xl" />
                </span>
                <p className="font-DMsans font-normal text-sm text-primaryFontColor hidden sm:block">
                  Shop by Category
                </p>
              </div>
              {/* ========= category overlay =========== */}
              {opencategory && (
                <div className="absolute top-[60px] left-0 bg-primaryFontColor w-[263px] z-40">
                  <ul>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] pl-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Accesories
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] pl-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Furniture
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] pl-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Electronics
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] pl-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Clothes
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] pl-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Bags
                      </Link>
                    </li>
                    <li className="py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] pl-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Home appliances
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <Search />
            </div>
            <div className="flex items-center gap-x-3 md:gap-x-10">
              <div>
                <div className="flex items-center gap-x-1 md:gap-x-2 cursor-pointer">
                  <span>
                    <FaUser className="text-lg" />
                  </span>
                  <span>
                    <IoMdArrowDropdown className="text-base sm:text-lg" />
                  </span>
                </div>
              </div>

              <div className="cursor-pointer">
                <span>
                  <FaShoppingCart className="text-lg sm:text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
