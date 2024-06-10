import React, { useState } from "react";
import Breadcrumb from "../../Common/BreadCrumb/BreadCrumb";
import { numberCheck, checkEmail } from "../../../utils/Utils";
import { PiWarningDiamondBold, PiShieldWarningBold } from "react-icons/pi";
import { TiArrowSortedUp } from "react-icons/ti";
import { successMessage } from "../../../utils/Utils";
// array list of all country name
import { all } from "all-countries";
// firebase firestore
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
const Checkout = () => {
  const [checkBank, setcheckBank] = useState(false);
  const [checkBank2, setcheckBank2] = useState(false);
  const [Loading, setLoading] = useState(false);

  // Store input value
  const [billingDetails, setbillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    county: "",
    postCode: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Store input error
  const [billingDetailsError, setbillingDetailsError] = useState({
    firstNameError: "",
    lastNameError: "",
    countryError: "",
    streetAddressError: "",
    cityError: "",
    postCodeError: "",
    phoneError: "",
    emailError: "",
    numberValidate: "",
    emailValidate: "",
  });

  // Handle input field
  const HandleField = (e) => {
    setbillingDetails({
      ...billingDetails,
      [e.target.id]: e.target.value,
    });
  };
  // HandleProcced Button
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
        firstNameError: "Please enter your firstname",
      });
    } else if (lastName === "") {
      setbillingDetailsError({
        ...billingDetailsError,
        firstNameError: "",
        lastNameError: "Please enter your lastname",
      });
    } else if (!country) {
      setbillingDetailsError({
        ...billingDetailsError,
        lastNameError: "",
        countryError: "Please select country",
      });
    } else if (!streetAddress) {
      setbillingDetailsError({
        ...billingDetailsError,
        countryError: "",
        streetAddressError: "Please enter your address",
      });
    } else if (!city) {
      setbillingDetailsError({
        ...billingDetailsError,
        streetAddressError: "",
        cityError: "Please enter your city",
      });
    } else if (!postCode) {
      setbillingDetailsError({
        ...billingDetailsError,
        cityError: "",
        postCodeError: "Please enter your postcode",
      });
    } else if (!phone) {
      setbillingDetailsError({
        ...billingDetailsError,
        postCodeError: "",
        phoneError: "Please enter your number",
      });
    } else if (!numberCheck(phone)) {
      setbillingDetailsError({
        ...billingDetailsError,
        phoneError: "",
        numberValidate: "Please enter your valid number",
      });
    } else if (!email) {
      setbillingDetailsError({
        ...billingDetailsError,
        numberValidate: "",
        emailError: "Please enter your email address",
      });
    } else if (!checkEmail(email)) {
      setbillingDetailsError({
        ...billingDetailsError,
        emailError: "",
        emailValidate: "Please enter your valid email address",
      });
    } else {
      setbillingDetailsError({
        ...billingDetailsError,
        firstNameError: "",
        lastNameError: "",
        countryError: "",
        streetAddressError: "",
        cityError: "",
        postCodeError: "",
        phoneError: "",
        emailError: "",
        numberValidate: "",
        emailValidate: "",
      });
      setLoading(true);
      addDoc(collection(db, "billing"), billingDetails)
        .then((user) => {
          successMessage("Billing complete", "top-center", "dark", 1500);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          setbillingDetails({
            ...billingDetails,
            firstName: "",
            lastName: "",
            company: "",
            country: "",
            streetAddress: "",
            streetAddress2: "",
            city: "",
            county: "",
            postCode: "",
            phone: "",
            email: "",
            notes: "",
          });
        });
    }
  };

  // HandleRadioCheckInput
  const HandleRadioCheckInput = () => {
    setcheckBank(!checkBank);
    setcheckBank2(false);
  };

  const HandleRadioCheckInput2 = () => {
    setcheckBank2(!checkBank2);
    setcheckBank(false);
  };
  return (
    <>
      <div className="relative py-28">
        {Loading && (
          <div className="fixed top-0 left-0 h-screen w-full bg-[#ffffff18] transition-all backdrop-blur-sm z-40">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div
                className="inline-block h-10 w-10 animate-spin rounded-full border-4
            border-solid border-black border-e-transparent align-[-0.125em]
            text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]
            dark:text-white"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          </div>
        )}

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

          <div className="pt-14 max-w-[700px]">
            <h4 className="text-[39px] font-DMsans font-bold text-primaryFontColor pb-9">
              Billing Details
            </h4>
            {/* form */}
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-x-9">
                <div className="flex flex-col w-full">
                  <span className="text-base font-DMsans font-bold text-primaryFontColor">
                    First Name *
                  </span>
                  <input
                    type="text"
                    className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.firstNameError && "border-2 border-red-600 focus:border-b-red-600"}`}
                    placeholder="First Name"
                    onChange={HandleField}
                    id="firstName"
                    value={billingDetails.firstName}
                  />
                  {billingDetailsError.firstNameError && (
                    <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                      <PiWarningDiamondBold />{" "}
                      {billingDetailsError.firstNameError}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <span className="text-base font-DMsans font-bold text-primaryFontColor">
                    Last Name *
                  </span>
                  <input
                    type="text"
                    className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.lastNameError && "border-2 border-red-600 focus:border-b-red-600"}`}
                    placeholder="Last Name"
                    onChange={HandleField}
                    value={billingDetails.lastName}
                    id="lastName"
                  />
                  {billingDetailsError.lastNameError && (
                    <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                      <PiWarningDiamondBold />{" "}
                      {billingDetailsError.lastNameError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Companye Name (optional)
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Company Name"
                  onChange={HandleField}
                  id="company"
                  name="company"
                  value={billingDetails.company}
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Country *
                </span>
                <select
                  name="country"
                  id="country"
                  className={`border-b-2 py-3 ${billingDetailsError.countryError && "border-2 border-red-600"}`}
                  onChange={HandleField}
                  value={billingDetails.country}
                >
                  <option className="text-secondaryFontColor text-sm font-DMsans font-normal">
                    Please select
                  </option>
                  {all?.map((item) => (
                    <option
                      key={item}
                      className="text-secondaryFontColor text-sm font-DMsans font-normal"
                    >
                      {item}
                    </option>
                  ))}
                </select>
                {billingDetailsError.countryError && (
                  <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                    <PiWarningDiamondBold /> {billingDetailsError.countryError}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Street Address *
                </span>
                <input
                  type="text"
                  className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.streetAddressError && "border-2 border-red-600 focus:border-b-red-600"}`}
                  placeholder="House number and street name"
                  onChange={HandleField}
                  id="streetAddress"
                  value={billingDetails.streetAddress}
                />
                {billingDetailsError.streetAddressError && (
                  <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                    <PiWarningDiamondBold />{" "}
                    {billingDetailsError.streetAddressError}
                  </p>
                )}
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  onChange={HandleField}
                  id="streetAddress2"
                  name="streetAddress2"
                  value={billingDetails.streetAddress2}
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Town/City *
                </span>
                <input
                  type="text"
                  className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.cityError && "border-2 border-red-600 focus:border-b-red-600"}`}
                  placeholder="Town/City"
                  onChange={HandleField}
                  id="city"
                  value={billingDetails.city}
                />
                {billingDetailsError.cityError && (
                  <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                    <PiWarningDiamondBold /> {billingDetailsError.cityError}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  County (optional)
                </span>
                <input
                  type="text"
                  className="border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300"
                  placeholder="County"
                  onChange={HandleField}
                  id="county"
                  name="county"
                  value={billingDetails.county}
                />
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Post Code *
                </span>
                <input
                  type="text"
                  className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.postCode && "border-2 border-red-600 focus:border-b-red-600"}`}
                  placeholder="Post Code"
                  onChange={HandleField}
                  id="postCode"
                  value={billingDetails.postCode}
                />
                {billingDetailsError.postCodeError && (
                  <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                    <PiWarningDiamondBold /> {billingDetailsError.postCodeError}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Phone *
                </span>
                <input
                  type="text"
                  className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.phoneError ? "border-2 border-red-600 focus:border-b-red-600" : billingDetailsError.numberValidate && "border-2 border-red-800 focus:border-b-red-800"}`}
                  placeholder="Phone"
                  onChange={HandleField}
                  id="phone"
                  value={billingDetails.phone}
                />
                {billingDetailsError.phoneError ? (
                  <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                    <PiWarningDiamondBold /> {billingDetailsError.phoneError}
                  </p>
                ) : (
                  billingDetailsError.numberValidate && (
                    <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                      <PiShieldWarningBold />
                      {billingDetailsError.numberValidate}
                    </p>
                  )
                )}
              </div>
              <div className="flex flex-col w-full mt-6">
                <span className="text-base font-DMsans font-bold text-primaryFontColor">
                  Email Address *
                </span>
                <input
                  type="email"
                  className={`border-b-2 placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal py-3 focus:bg-[#e7e6e6] focus:border-b-yellow-500 pl-2 focus:transition-all focus:duration-300 ${billingDetailsError.emailError ? "border-2 border-red-600 focus:border-b-red-600" : billingDetailsError.emailValidate && "border-2 border-red-800 focus:border-b-red-800"}`}
                  placeholder="Email"
                  onChange={HandleField}
                  id="email"
                  value={billingDetails.email}
                />
                {billingDetailsError.emailError ? (
                  <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                    <PiWarningDiamondBold /> {billingDetailsError.emailError}
                  </p>
                ) : (
                  billingDetailsError.emailValidate && (
                    <p className="pt-[5px] text-red-600 font-DMsans font-medium text-sm flex items-center gap-x-1">
                      <PiShieldWarningBold />{" "}
                      {billingDetailsError.emailValidate}
                    </p>
                  )
                )}
              </div>
            </form>
          </div>
          {/* Additional Information */}
          <div className="pt-24 max-w-[700px]">
            <h3 className="text-[38px] font-DMsans font-bold text-primaryFontColor pb-6">
              Additional Information
            </h3>
            <div className="w-full">
              <h2 className="text-base font-DMsans font-bold text-primaryFontColor pb-2">
                Other Notes (optional)
              </h2>
              <textarea
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery..."
                className="border-b-2 w-full pb-2"
                name="notes"
                id="notes"
                onChange={HandleField}
                value={billingDetails.notes}
              />
            </div>
          </div>

          {/* Order details */}
          <div className="pt-24">
            <h3 className="text-[38px] font-DMsans font-bold text-primaryFontColor pb-11">
              Your Order
            </h3>
            <div className="max-w-[600px] border-2">
              <div className="flex items-center">
                <div className="w-full py-4 border-b-2 pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                  Product
                </div>
                <div className="w-full py-4 border-b-2 pl-4 border-l-2 text-base font-DMsans font-normal text-secondaryFontColor">
                  Total
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full py-4 border-b-2 pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                  Product name x 1
                </div>
                <div className="w-full py-4 border-b-2 pl-4 border-l-2  text-base font-DMsans font-normal text-secondaryFontColor">
                  389.99 $
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full py-4 border-b-2 pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                  Subtotal
                </div>
                <div className="w-full py-4 border-b-2 pl-4 border-l-2  text-base font-DMsans font-normal text-secondaryFontColor">
                  389.99 $
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full py-4  pl-4 text-base font-DMsans font-bold text-primaryFontColor">
                  Total
                </div>
                <div className="w-full py-4 pl-4 border-l-2 text-base font-DMsans font-normal text-secondaryFontColor">
                  389.99 $
                </div>
              </div>
            </div>
          </div>

          {/* Payment section */}
          <div className="border-2 mt-14 py-6 px-8">
            {/* Bank  */}
            <div>
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={HandleRadioCheckInput}
              >
                <div className="cursor-pointer relative w-4 h-4 border-2 border-primaryFontColor rounded-full">
                  {checkBank ? (
                    <div className="absolute w-full h-full rounded-full transition-all bg-black top-0 left-0 border-[2px] border-white"></div>
                  ) : (
                    <div
                      className={`absolute w-full h-full rounded-full bg-transparent transition-all top-0 left-0 border-[2px] border-white ${checkBank2 && "border-secondaryFontColor"}`}
                    ></div>
                  )}
                </div>
                <div>
                  <h5
                    className={`text-base font-DMsans font-bold text-primaryFontColor ${checkBank2 && "text-secondaryFontColor"}`}
                  >
                    Bank
                  </h5>
                </div>
              </div>
              <div className="relative mt-4 bg-[#e1e1e2] w-full py-4 pl-4 text-sm font-DMsans font-normal text-secondaryFontColor">
                Pay via Bank; you can pay with your credit card if you don’t
                have a Bank account.
                <div>
                  <TiArrowSortedUp className="absolute top-[-27px] left-[20px] text-5xl text-[#e1e1e2]" />
                </div>
              </div>
            </div>

            {/* Bank 2 */}
            <div className="pt-6">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={HandleRadioCheckInput2}
              >
                <div className="cursor-pointer relative w-4 h-4 border-2 border-primaryFontColor rounded-full">
                  {checkBank2 ? (
                    <div className="absolute w-full h-full rounded-full transition-all bg-black top-0 left-0 border-[2px] border-white"></div>
                  ) : (
                    <div
                      className={`absolute w-full h-full rounded-full bg-transparent transition-all top-0 left-0 border-[2px] border-white ${checkBank && "border-secondaryFontColor"}`}
                    ></div>
                  )}
                </div>
                <div>
                  <h5
                    className={`text-base font-DMsans font-bold text-primaryFontColor ${checkBank && "text-secondaryFontColor"}`}
                  >
                    Bank 2
                  </h5>
                </div>
              </div>
              <p className="text-base font-DMsans font-normal text-secondaryFontColor pt-3">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="text-primaryFontColor underline cursor-pointer">
                  privacy policy.
                </span>
              </p>
            </div>

            {/* procced to Bank button */}
            <div>
              <button
                onClick={HandleProcced}
                className="bg-primaryFontColor text-primaryBgColor text-sm font-DMsans font-bold py-4 px-11 mt-8 hover:bg-[#3a3a3a] active:scale-95"
              >
                Proceed to Bank
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
