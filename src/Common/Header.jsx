import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart, FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiLogout } from "react-icons/hi";
import Search from "../Common/Search";

const Header = () => {
  // ======== all state =========
  const [opencategory, setopencategory] = useState(false);
  const [openNav, setopenNav] = useState(false);
  const [openUser, setopenUser] = useState(false);
  const [openCart, setopenCart] = useState(false);
  // ============================

  // handleNav
  const handleNav = () => {
    setopenNav(!openNav);
    setopencategory(false);
    setopenUser(false);
    setopenCart(false);
  };

  // handleCategory
  const handleCategory = () => {
    setopencategory(!opencategory);
    setopenNav(false);
    setopenUser(false);
    setopenCart(false);
  };

  // HandleUser
  const HandleUser = () => {
    setopenUser(!openUser);
    setopenNav(false);
    setopencategory(false);
    setopenCart(false);
  };

  // HandleCart
  const HandleCart = () => {
    setopenCart(!openCart);
    setopenUser(false);
    setopenNav(false);
    setopencategory(false);
  };

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
                    to={"/"}
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
                    to={"/shop"}
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
            {/* =========== Mobile view menu ==================== */}
            <div
              className={`sm:hidden fixed top-0 pt-7 bg-white z-[999] w-1/2 h-screen shadow-lg ${
                openNav
                  ? "left-0 transition-all duration-[0.5s]"
                  : "left-[-100%] transition-all duration-[0.5s]"
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
                    to={"/shop"}
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
      <div className="bg-[#F5F5F3] px-4">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <div className="relative">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={handleCategory}
              >
                <span>
                  <HiBars2 className="text-2xl sm:xl" />
                </span>
                <p className="font-DMsans font-normal text-sm text-primaryFontColor hidden lg:block">
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
            <div className="flex items-center gap-x-3 lg:gap-x-10">
              <div className="relative">
                <div
                  className="flex items-center gap-x-1 md:gap-x-2 cursor-pointer"
                  onClick={HandleUser}
                >
                  <span>
                    <FaUser className="text-lg" />
                  </span>
                  <span>
                    {openUser ? (
                      <MdArrowDropUp className="text-base sm:text-xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-base sm:text-xl" />
                    )}
                  </span>
                </div>
                {openUser ? (
                  <div className="bg-white absolute top-[54px] left-[-121px] z-30">
                    <ul className="flex flex-col items-center">
                      <li className="py-3 sm:py-4 px-10 sm:px-14 bg-primaryFontColor cursor-pointer hover:bg-[#333]">
                        <Link className="whitespace-nowrap text-xs sm:text-sm font-DMsans font-bold text-white">
                          My Account
                        </Link>
                      </li>
                      <li className="py-3 sm:py-4 px-10 sm:px-14 cursor-pointer flex items-center gap-x-2">
                        <Link className="text-xs sm:text-sm font-DMsans font-normal text-primaryFontColor bg-white">
                          Log Out
                        </Link>
                        <span>
                          <HiLogout className="text-lg sm:text-xl" />
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <span className="cursor-pointer" onClick={HandleCart}>
                  {openCart ? (
                    <FaCartArrowDown className="text-lg sm:text-xl" />
                  ) : (
                    <FaShoppingCart className="text-lg sm:text-xl" />
                  )}
                </span>
                {openCart && (
                  <div className="bg-white shadow-md w-[320px] sm:w-[360px] absolute top-[58px] right-0 z-50">
                    <div className="bg-[#F5F5F3] flex items-center justify-between py-5 px-5">
                      <div className="w-20 h-20 bg-[#979797]"></div>
                      <div className="flex flex-col gap-y-3">
                        <p className="font-DMsans font-bold text-sm text-primaryFontColor">
                          Black Smart Watch
                        </p>
                        <p className="font-DMsans font-bold text-sm text-primaryFontColor">
                          $44.00
                        </p>
                      </div>
                      <div
                        className="text-xl cursor-pointer"
                        onClick={() => setopenCart(false)}
                      >
                        <span>
                          <RxCross2 />
                        </span>
                      </div>
                    </div>
                    <div className="px-5 py-5">
                      <div>
                        <p className="text-base font-DMsans font-normal text-secondaryFontColor">
                          Subtotal:{" "}
                          <span className="font-bold text-primaryFontColor">
                            $44.00
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3">
                        <button className="font-DMsans font-bold text-xs sm:text-sm text-primaryFontColor py-3 px-7 sm:px-10 border-2 border-primaryFontColor hover:bg-primaryFontColor hover:text-white transition-all">
                          View Cart
                        </button>
                        <button className="font-DMsans font-bold text-xs sm:text-sm text-primaryFontColor py-3 px-7 sm:px-10 border-2 border-primaryFontColor hover:bg-primaryFontColor hover:text-white transition-all">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
