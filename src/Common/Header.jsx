import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <img src={logo} alt={logo} />
            </div>
            <div>
              <ul>
                <NavLink
                  className={
                    "text-sm font-DMsans font-bold text-secondaryFontColor hover:bg-primaryFontColor"
                  }
                >
                  Home
                </NavLink>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
