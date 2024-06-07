import React, { useState } from "react";
import Breadcrumb from "../../Common/BreadCrumb/BreadCrumb";

const Checkout = () => {
  const [billingDetails, setbillingDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });

  const [billingDetailsError, setbillingDetailsError] = useState({
    firstNameError: "",
    lastNameError: "",
    countryError: "",
    streetAddressError: "",
    cityError: "",
    postCodeError: "",
    phoneError: "",
    emailError: "",
  });

  const HandleField = (e) => {
    setbillingDetails({
      ...billingDetails,
      [e.target.id]: e.target.value,
    });
  };

  const HandleProcced = () => {
    const {
      firstName,
      lastName,
      country,
      streetAddress,
      city,
      postCode,
      phone,
      email,
    } = billingDetails;

    if (firstName === "") {
      setbillingDetailsError({
        ...billingDetailsError,
        firstNameError: "Firstname required",
      });
    } else if (lastName === "") {
      setbillingDetailsError({
        ...billingDetailsError,
        lastNameError: "Lastname required",
      });
    } else if (!country) {
      setbillingDetailsError({
        ...billingDetailsError,
        countryError: "Select country",
      });
    }
  };

  console.log(billingDetailsError);
  return (
    <>
      <div className="py-28">
        <div className="container">
          <div>
            <h1 className="text-5xl font-DMsans font-bold text-primaryFontColor pb-2">
              Checkout
            </h1>
            <Breadcrumb />
          </div>

          <p className="text-base font-DMsans font-normal text-secondaryFontColor pt-11">
            Have a coupon?{" "}
            <span className="text-primaryFontColor cursor-pointer">
              Click here to enter your code
            </span>
          </p>

          <div className="pt-14">
            <h4 className="text-[39px] font-DMsans font-bold text-primaryFontColor pb-9">
              Billing Details
            </h4>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-x-9">
                <div className="flex flex-col w-full">
                  <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                    First Name *
                  </span>
                  <input
                    type="text"
                    className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                    placeholder="First Name"
                    onChange={HandleField}
                    id="firstName"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                    Last Name *
                  </span>
                  <input
                    type="text"
                    className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                    placeholder="First Name"
                    onChange={HandleField}
                    id="lastName"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Companye Name (optional)
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Company Name"
                  onChange={HandleField}
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Country *
                </span>
                <select
                  name="country"
                  id="country"
                  className="border-b-2 pb-4"
                  onChange={HandleField}
                >
                  <option className="text-secondaryFontColor text-sm font-DMsans font-normal">
                    Please select
                  </option>
                  <option>India</option>
                  <option>Bangladesh</option>
                </select>
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Street Address *
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="House number and street name"
                  onChange={HandleField}
                  id="streetAddress"
                />
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 pt-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  onChange={HandleField}
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Town/City *
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Town/City"
                  onChange={HandleField}
                  id="city"
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  County (optional)
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="County"
                  onChange={HandleField}
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Post Code *
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Post Code"
                  onChange={HandleField}
                  id="postCode"
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Phone *
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Phone"
                  onChange={HandleField}
                  id="phone"
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                  Email Address *
                </span>
                <input
                  type="email"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal pb-4 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Email"
                  onChange={HandleField}
                  id="email"
                />
              </div>
            </form>
          </div>
          <button
            onClick={HandleProcced}
            className="bg-primaryFontColor text-primaryBgColor text-lg py-2 px-6 mt-8"
          >
            Procced
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
