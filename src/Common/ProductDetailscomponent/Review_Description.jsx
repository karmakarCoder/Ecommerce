import React, { useState } from "react";
import Review from "./Review";
import Description from "./Description";

const Review_Description = ({ data }) => {
  const [review, setreview] = useState(true);
  const [description, setdescription] = useState(false);

  const HandleDescription = () => {
    setdescription(true);
    setreview(false);
  };
  const HandleReview = () => {
    setreview(true);
    setdescription(false);
  };
  return (
    <>
      <div className="py-12 md:py-28">
        <div className="container">
          <div>
            <div className="flex items-center gap-x-16">
              <span
                className={`text-sm md:text-xl font-DMsans  cursor-pointer ${description ? "text-primaryFontColor font-bold" : "text-secondaryFontColor font-normal"}`}
                onClick={HandleDescription}
              >
                Description
              </span>
              <span
                className={`text-sm md:text-xl font-DMsans  cursor-pointer ${review ? "font-bold text-primaryFontColor" : "text-secondaryFontColor font-normal"}`}
                onClick={HandleReview}
              >
                Reviews({data.reviews && data.reviews.length})
              </span>
            </div>
            <div>
              {review && <Review data={data} />}
              {description && <Description data={data} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review_Description;
