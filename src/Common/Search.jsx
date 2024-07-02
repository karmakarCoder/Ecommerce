import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = ({ className, placeholder, onSearch, value }) => {
  return (
    <>
      <div className="items-center flex">
        <div className="relative z-50">
          <input
            type="text"
            placeholder={placeholder ? placeholder : "Search Products"}
            className={`relative pl-5 py-2 lg:py-4 pr-[10px] sm:pr-[220px] md:pr-[280px] lg:pr-[468px] placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-DMsans placeholder:font-normal focus:outline-none  focus:ring-yellow-600 focus:ring-1 focus:rounded-md ${className}`}
            onChange={onSearch}
            value={value}
          />
          <div className="absolute top-0 right-0 my-[9px] md:my-4 pr-5 ">
            <FaSearch className="text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
