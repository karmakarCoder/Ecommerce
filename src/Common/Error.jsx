import React from "react";
import Search from "../Common/Search";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-start py-20">
          <h2 className="font-DMsans font-bold text-[200px] text-primaryFontColor">
            404
          </h2>
          <p className="text-secondaryFontColor font-DMsans text-base pb-12 max-w-[644px]">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
          <Search
            placeholder={"Type to search"}
            className={"border-2 border-[#F0F0F0]"}
          />
          <Link
            to={"/"}
            className={"mt-14 py-4 px-14 bg-primaryFontColor text-white"}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
