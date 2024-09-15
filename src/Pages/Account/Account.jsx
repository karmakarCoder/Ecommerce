import React, { useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { getAuth } from "firebase/auth";

const Account = () => {
  const auth = getAuth();

  console.log(auth.currentUser);
  const [openDashboard, setopenDashboard] = useState(true);
  const [openothers, setopenothers] = useState(false);
  const [openAddress, setopenAddress] = useState(false);
  const [openDetauls, setopenDetauls] = useState(false);

  const handleDashboard = () => {
    setopenDashboard(true);
    setopenothers(false);
    setopenAddress(false);
    setopenDetauls(false);
  };

  const handleothers = () => {
    setopenothers(true);
    setopenDashboard(false);
    setopenAddress(false);
    setopenDetauls(false);
  };

  const HandleAddress = () => {
    setopenAddress(true);
    setopenDashboard(false);
    setopenothers(false);
    setopenDetauls(false);
  };

  const HandleDetails = () => {
    setopenDetauls(true);
    setopenDashboard(false);
    setopenothers(false);
    setopenAddress(false);
  };
  return (
    <div className="py-[50px] lg:py-[100px] px-4 xl:px-0">
      <div className="container">
        <div>
          <h2 className="text-2xl lg:text-5xl font-DMsans font-bold text-primaryFontColor pb-1 lg:pb-3">
            My Account
          </h2>
          <BreadCrumb />
        </div>
        <div className="pt-12 lg:pt-[120px] flex gap-x-2 lg:gap-x-10">
          <div className="lg:w-[30%] w-[40%] flex flex-col gap-y-5">
            <div className="pb-2 lg:pb-5 border-b-2 border-b-[#d8d8d8]">
              <h4
                onClick={handleDashboard}
                className={`font-DMsans text-sm lg:text-base cursor-pointer ${openDashboard ? "text-primaryFontColor font-bold" : "text-secondaryFontColor font-normal"}`}
              >
                Dashboard
              </h4>
            </div>
            <div className="pb-2 lg:pb-5 border-b-2 border-b-[#d8d8d8]">
              <h4
                onClick={handleothers}
                className={`font-DMsans text-sm lg:text-base cursor-pointer ${openothers ? "text-primaryFontColor font-bold" : "text-secondaryFontColor font-normal"}`}
              >
                Others
              </h4>
            </div>
            <div className="pb-2 lg:pb-5 border-b-2 border-b-[#d8d8d8]">
              <h4
                onClick={HandleAddress}
                className={`font-DMsans text-sm lg:text-base cursor-pointer ${openAddress ? "text-primaryFontColor font-bold" : "text-secondaryFontColor font-normal"}`}
              >
                Addresses
              </h4>
            </div>
            <div className="pb-2 lg:pb-5 border-b-2 border-b-[#d8d8d8]">
              <h4
                onClick={HandleDetails}
                className={`font-DMsans text-sm lg:text-base cursor-pointer ${openDetauls ? "text-primaryFontColor font-bold" : "text-secondaryFontColor font-normal"}`}
              >
                Account details
              </h4>
            </div>
            <div className="pb-2 lg:pb-5 border-b-2 border-b-[#d8d8d8]">
              <h4 className="text-secondaryFontColor cursor-pointer font-DMsans font-normal text-sm lg:text-base">
                Logout
              </h4>
            </div>
          </div>

          <div className="lg:w-[70%] w-[60%]">
            {/* Dashboard */}
            <div className={`${openDashboard ? "block" : "hidden"}`}>
              <h5 className="font-normal text-sm lg:text-base font-DMsans text-secondaryFontColor">
                Hello <span className="text-primaryFontColor">admin</span>
              </h5>
            </div>
            {/* others */}
            <div className={`${openothers ? "block" : "hidden"}`}>
              <h5 className="font-normal text-base font-DMsans text-secondaryFontColor">
                Hello <span className="text-primaryFontColor">other</span>
              </h5>
            </div>
            {/* address */}
            <div className={`${openAddress ? "block" : "hidden"}`}>
              <h5 className="font-normal text-base font-DMsans text-secondaryFontColor">
                Hello <span className="text-primaryFontColor">address</span>
              </h5>
            </div>
            {/* Account details */}
            <div className={`${openDetauls ? "block" : "hidden"}`}>
              <h5 className="font-normal text-base font-DMsans text-secondaryFontColor">
                Hello{" "}
                <span className="text-primaryFontColor">Account details</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
