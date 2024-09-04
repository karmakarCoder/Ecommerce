import React, { useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Account = () => {
  const [openDashboard, setopenDashboard] = useState(true);

  const handleDashboard = () => {
    setopenDashboard(true);
  };
  return (
    <div className="py-[100px]">
      <div className="container">
        <div>
          <h2 className="text-5xl font-DMsans font-bold text-primaryFontColor pb-3">
            My Account
          </h2>
          <BreadCrumb />
        </div>
        <div className="pt-[120px] flex gap-x-10">
          <div className="w-[30%] flex flex-col gap-y-5">
            <div className="pb-5 border-b-2 border-b-[#d8d8d8]">
              <h4
                onClick={handleDashboard}
                className={`font-DMsans text-base ${openDashboard ? "text-primaryFontColor font-bold" : "text-secondaryFontColor font-normal"}`}
              >
                Dashboard
              </h4>
            </div>
            <div className="pb-5 border-b-2 border-b-[#d8d8d8]">
              <Link
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-primaryFontColor font-DMsans font-bold text-base"
                    : isPending
                      ? "text-secondaryFontColor font-DMsans font-normal text-base"
                      : "";
                }}
              >
                Others
              </Link>
            </div>
            <div className="pb-5 border-b-2 border-b-[#d8d8d8]">
              <Link
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-primaryFontColor font-DMsans font-bold text-base"
                    : isPending
                      ? "text-secondaryFontColor font-DMsans font-normal text-base"
                      : "";
                }}
              >
                Addresses
              </Link>
            </div>
            <div className="pb-5 border-b-2 border-b-[#d8d8d8]">
              <Link
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-primaryFontColor font-DMsans font-bold text-base"
                    : isPending
                      ? "text-secondaryFontColor font-DMsans font-normal text-base"
                      : "";
                }}
              >
                Account details
              </Link>
            </div>
            <div className="pb-5 border-b-2 border-b-[#d8d8d8]">
              <Link
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "text-primaryFontColor font-DMsans font-bold text-base"
                    : isPending
                      ? "text-secondaryFontColor font-DMsans font-normal text-base"
                      : "";
                }}
              >
                Logout
              </Link>
            </div>
          </div>

          <div className="w-[70%]">
            {/* Dashboard */}
            <div className={`${openDashboard ? "block" : "hidden"}`}>
              <h5 className="font-normal text-base font-DMsans text-secondaryFontColor">
                Hello <span className="text-primaryFontColor">admin</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
