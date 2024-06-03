import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const RatingStar = ({ rating, data, ratingNumber }) => {
  const star = Array.from({ length: 5 }, (x, index) => {
    let fractionNumber = index + 0.5;

    return (
      <span>
        {rating >= index + 1 ? (
          <IoMdStar />
        ) : rating >= fractionNumber ? (
          <IoMdStarHalf />
        ) : (
          <IoMdStarOutline />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex items-center gap-x-5 py-2 md:py-4">
        <div className="text-yellow-400 text-md md:text-xl flex items-center">
          {star}
        </div>

        {ratingNumber ? ratingNumber : null}
      </div>
    </>
  );
};

export default RatingStar;
