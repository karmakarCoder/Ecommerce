import React, { useRef, useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbShoppingCartX } from "react-icons/tb";
import { removeCart, getTotal } from "../Redux/AddToCartSlice";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  // ======== all state =========
  const [opencategory, setopencategory] = useState(false);
  const [openNav, setopenNav] = useState(false);
  const [openUser, setopenUser] = useState(false);
  const [openCart, setopenCart] = useState(false);
  const Menuref = useRef();
  const navigate = useNavigate();

  // ============================
  const dispatch = useDispatch();

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

  // HandleCroseCart

  const HandleCroseCart = () => {
    setopenCart(false);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!Menuref.current.contains(e.target)) {
        setopenUser(false);
        setopencategory(false);
      }
    });
  }, []);

  // Data fetch

  const { cartitem, totalCartitem, totalAmount } = useSelector(
    (state) => state.cart
  );

  const HandleViewCart = () => {
    navigate("cart");
    setopenCart(false);
  };

  // HandleCart

  const HandleRemoveToCart = (item) => {
    dispatch(removeCart(item));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, totalAmount, cartitem, totalCartitem]);

  // HandleSearch

  const { data, status } = useSelector((state) => state.product);

  const [allproduct, setallproduct] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [searchValue, setsearchValue] = useState();

  useEffect(() => {
    if (status === "IDLE") {
      setallproduct(data.products);
    }
  }, [data.products, status]);

  const HandleSearch = (event) => {
    const { value } = event.target;
    setsearchValue(value);
    if (searchValue) {
      const searchResult = allproduct.filter((products) =>
        products.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setsearchResult(searchResult);
    } else {
      setsearchResult([]);
    }
  };

  const HandleSerach = (item) => {
    setsearchValue("");
    setsearchResult([]);
    navigate(`/product-details/${item.id}`);
  };

  return (
    <>
      <div className="bg-white px-4">
        <div className="container">
          <div className="relative flex items-center py-8 justify-between px-4 lg:px-0">
            <div>
              <NavLink to={"/"}>
                <img src={logo} alt={logo} />
              </NavLink>
            </div>
            <div className="m-auto hidden sm:block">
              <ul
                className="flex items-center gap-x-10 justify-center
              "
              >
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                        : isActive
                          ? "font-bold"
                          : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/wishlist"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-sm font-DMsans font-normal text-secondaryFontColor transition-all"
                        : isActive
                          ? "font-bold text-primaryFontColor"
                          : "hover:text-primaryFontColor hover:font-bold"
                    }
                  >
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/shop"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                        : isActive
                          ? "font-bold"
                          : "hover:text-primaryFontColor hover:font-bold"
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
                    to={"/contact"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-sm font-DMsans font-normal text-secondaryFontColor transition-all"
                        : isActive
                          ? "font-bold text-primaryFontColor"
                          : "hover:text-primaryFontColor hover:font-bold"
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className="block sm:hidden cursor-pointer text-xl z-[999]"
              onClick={handleNav}
            >
              <span className="cursor-pointer">
                {openNav ? <RxCross2 /> : <FaBars />}
              </span>
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
                    to={"/"}
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                    onClick={() => setopenNav(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/wishlist"}
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                  >
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/shop"}
                    className={
                      "text-sm font-DMsans font-normal text-secondaryFontColor hover:text-primaryFontColor hover:font-bold transition-all"
                    }
                    onClick={() => setopenNav(false)}
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

            <div
              className={`bg-[#00000031] h-screen w-screen top-0 left-0 z-20 fixed ${
                openNav ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* ============== Bottom ============= */}

      <div className="bg-[#F5F5F3] px-4" ref={Menuref}>
        <div
          className={`bg-black w-full opacity-60 h-screen fixed top-0 left-0 z-30 ${searchResult.length > 0 ? "block" : "hidden"}`}
        ></div>

        <div className="container relative">
          {searchResult.length > 0 && (
            <div className="bg-[#ffffff70] backdrop-blur-xl w-full absolute top-[106px] left-0 z-50 rounded-xl shadow-lg overflow-hidden">
              {searchResult?.map((product) => (
                <div
                  key={product.id}
                  onClick={() => HandleSerach(product)}
                  className="border-b-2 lg:py-5 py-3 px-6 cursor-pointer hover:bg-[#ffffff46] transition-all"
                >
                  <h3 className="font-DMsans font-semibold lg:text-xl text-md flex items-center gap-x-3 text-primaryFontColor capitalize">
                    <span className="text-primaryFontColor lg:text-2xl text-xl">
                      <IoSearchSharp />
                    </span>{" "}
                    {product && product.title}
                  </h3>
                </div>
              ))}
            </div>
          )}

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
                      <Link className="text-sm flex items-center justify-between font-DMsans font-normal text-[#ffffff88] px-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Accesories{" "}
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] flex items-center justify-between px-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Furniture{" "}
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] flex items-center justify-between px-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Electronics{" "}
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] flex items-center justify-between px-5 hover:text-white hover:pl-7 hover:font-bold transition-all">
                        Clothes{" "}
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </li>
                    <li className="border-b-2 border-[#ffffff21] py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] hover:text-white hover:pl-7 flex items-center justify-between px-5 hover:font-bold transition-all">
                        Bags{" "}
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </li>
                    <li className="py-4">
                      <Link className="text-sm font-DMsans font-normal text-[#ffffff88] hover:text-white flex items-center justify-between px-5 hover:pl-7 hover:font-bold transition-all">
                        Home appliances{" "}
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Search bar */}
            <div>
              <Search onSearch={HandleSearch} value={searchValue} />
            </div>
            <div className="flex items-center gap-x-3 lg:gap-x-10">
              <div className="relative">
                <div onClick={HandleUser}>
                  <div className="flex items-center gap-x-1 md:gap-x-2 cursor-pointer">
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
                </div>

                {openUser ? (
                  <div className="bg-[#e2e2e2] absolute top-[54px] left-[-121px] z-30">
                    <ul className="flex flex-col items-center">
                      <li className="py-3 sm:py-4 px-10 sm:px-14 bg-primaryFontColor cursor-pointer hover:bg-[#333]">
                        <Link className="whitespace-nowrap text-xs sm:text-sm font-DMsans font-bold text-white">
                          My Account
                        </Link>
                      </li>
                      <li className="py-3 sm:py-4 px-10 sm:px-14 cursor-pointer flex items-center gap-x-2">
                        <Link className="text-xs sm:text-sm font-DMsans font-normal text-primaryFontColor">
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
                <div onClick={HandleCart} className="cursor-pointer z-50">
                  <span>
                    {openCart ? (
                      <FaCartArrowDown className="text-lg sm:text-xl" />
                    ) : (
                      <FaShoppingCart className="text-lg sm:text-xl" />
                    )}

                    {cartitem.length > 0 && (
                      <div className="flex items-center justify-center text-primaryFontColor font-DMsans text-sm font-semibold w-3 h-3 border-2 border-white rounded-full bg-red-500 absolute top-[-4px] right-[-8px]"></div>
                    )}
                  </span>
                </div>

                {openCart &&
                  (cartitem.length > 0 ? (
                    <div className="bg-white  shadow-md w-[320px] sm:w-[360px] absolute top-[58px] right-0 z-50">
                      <div className="h-[370px] overflow-y-scroll scrollbar-thumb-[#929292] scrollbar-track-white scrollbar-thin">
                        {cartitem?.map((item) => (
                          <div className=" flex flex-col gap-y-[5px] ">
                            <div className="bg-[#F5F5F3] flex items-center justify-between py-5 px-5">
                              <div className="w-20 h-20 bg-[#bdbcbc]">
                                <img
                                  src={
                                    item.thumbnail ? (
                                      item.thumbnail
                                    ) : (
                                      <MdOutlineImageNotSupported />
                                    )
                                  }
                                  alt={
                                    item.thumbnail ? (
                                      item.thumbnail
                                    ) : (
                                      <MdOutlineImageNotSupported />
                                    )
                                  }
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex flex-col gap-y-3">
                                <p className="font-DMsans font-bold text-sm text-primaryFontColor w-[178px] overflow-hidden whitespace-nowrap text-ellipsis">
                                  {item.title ? item.title : "Title"}
                                </p>
                                <p className="font-DMsans font-bold text-sm text-primaryFontColor">
                                  $
                                  {Math.round(
                                    item.price ? item.price : "$0.00"
                                  )}
                                </p>
                              </div>
                              <div
                                className="text-xl cursor-pointer"
                                onClick={() => HandleRemoveToCart(item)}
                              >
                                <span>
                                  <RxCross2 />
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="px-5 py-5">
                        <div>
                          <p className="text-base font-DMsans font-normal text-secondaryFontColor">
                            Subtotal:
                            <span className="font-bold text-primaryFontColor">
                              ${totalAmount}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-3">
                          <button
                            className="font-DMsans font-bold text-xs sm:text-sm text-primaryFontColor py-3 px-7 sm:px-10 border-2 border-primaryFontColor hover:bg-primaryFontColor hover:text-white transition-all"
                            onClick={HandleViewCart}
                          >
                            View Cart
                          </button>
                          <button className="font-DMsans font-bold text-xs sm:text-sm text-primaryFontColor py-3 px-7 sm:px-10 border-2 border-primaryFontColor hover:bg-primaryFontColor hover:text-white transition-all">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" flex items-center justify-center flex-col border-2 border-[#00000063] shadow-md absolute h-[300px] bg-[#e0dfdf] w-[250px] z-20 right-0 top-[58px]">
                      <span
                        className="absolute top-3 left-4 cursor-pointer"
                        onClick={HandleCroseCart}
                      >
                        <RxCross2 className="text-2xl hover:scale-110 transition-all" />
                      </span>
                      <p className="opacity-80 text-primaryFontColor font-medium text-base font-DMsans capitalize">
                        No product here
                      </p>
                      <TbShoppingCartX className="text-4xl text-primaryFontColor opacity-80" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
