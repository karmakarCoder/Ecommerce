import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ className, placeholder }) => {
  return (
    <>
      <div className="items-center flex">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder ? placeholder : "Search Products"}
            className={`relative pl-5 py-4 pr-[10px] md:pr-[468px] placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-DMsans placeholder:font-normal focus:outline-none  focus:ring-yellow-600 focus:ring-1 focus:rounded-md ${className}`}
          />
          <div className="absolute top-0 right-0 my-4 pr-5 ">
            <FaSearch className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
