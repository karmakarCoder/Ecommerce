import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  const location = useLocation();
  let BreadCrumbpath = location.pathname.split("/").filter((x) => x);
  let BreadCrumbList = "";

  return (
    <>
      <div>
        <ul className="flex items-center gap-x-1">
          <li className="text-xs font-DMsans font-normal text-secondaryFontColor">
            <Link to={"/"}>Home</Link>
          </li>
          <span className="text-lg text-secondaryFontColor">
            <MdOutlineArrowRight />
          </span>

          {BreadCrumbpath.map((path, index) => {
            const islast = index === BreadCrumbpath.length - 1;
            BreadCrumbList += path;

            return (
              <li key={path}>
                {islast ? (
                  <Link
                    className={`text-xs font-DMsans font-normal text-secondaryFontColor capitalize ${
                      islast ? "text-[#000] font-black" : null
                    }`}
                  >
                    {path}
                  </Link>
                ) : (
                  <Link
                    to={`/${BreadCrumbList}`}
                    className={`text-xs font-DMsans font-normal text-secondaryFontColor capitalize ${
                      islast ? "text-[#000] font-extrabold" : null
                    }`}
                  >
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
