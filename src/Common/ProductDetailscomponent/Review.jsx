import React, { useEffect, useState } from "react";
import RatingStar from "./RatingStar";
const Review = ({ data }) => {
  const [dates, setdates] = useState("");
  useEffect(() => {
    function date() {
      ` ${
        data.reviews &&
        data.reviews.map((item) => {
          setdates(new Date(item && item.date).toLocaleDateString());
        })
      }`;
    }
    date();
  }, [data]);

  return (
    <>
      <div className="pt-5 md:pt-10">
        <h3 className="font-normal font-DMsans text-xs md:text-sm text-secondaryFontColor">
          {data.reviews && data.reviews.length} review for Product
        </h3>
        {data.reviews?.map((item, index) => (
          <div className="py-6 border-b-2 mt-4" key={index}>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-x-8">
                <p className="text-sm md:text-base font-DMsans font-normal text-primaryFontColor">
                  {item.reviewerName}
                </p>
                <RatingStar rating={item.rating} />
              </div>
              <div className="text-xs md:text-base font-DMsans font-normal text-secondaryFontColor">
                <p>{dates && dates}</p>
              </div>
            </div>

            <p className="pt-3 text-sm md:text-base font-DMsans font-normal text-secondaryFontColor">
              {item.comment}
            </p>
          </div>
        ))}

        {/* Add Review */}
        <div className="pt-12">
          <h3 className="text-md md:text-xl font-DMsans font-bold text-primaryFontColor pb-3 md:pb-6">
            Add a Review
          </h3>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="py-6">
              <p className="text-sm md:text-base font-DMsans font-bold text-primaryFontColor pb-2">
                Name
              </p>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name here"
                className="placeholder:text-xs md:placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal border-b-2 pb-4 w-[50%] focus:border-yellow-400"
              />
            </div>
            <div className="py-6">
              <p className="text-sm md:text-base font-DMsans font-bold text-primaryFontColor pb-2">
                Email
              </p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email here"
                className="placeholder:text-xs md:placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal border-b-2 pb-4 w-[50%] focus:border-yellow-400"
              />
            </div>
            <div className="py-6">
              <p className="text-sm md:text-base font-DMsans font-bold text-primaryFontColor pb-2">
                Review
              </p>
              <textarea
                type="text"
                id="name"
                name="name"
                placeholder="Your review here"
                className="placeholder:text-xs md:placeholder:text-sm placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal border-b-2 pb-4 w-[50%] focus:border-yellow-400"
              />
            </div>
            <div className="mt-2">
              <button className="bg-primaryFontColor text-primaryBgColor py-2 md:py-4 px-12 md:px-20 text-sm font-DMsans font-bold hover:bg-[#363636] active:bg-yellow-600">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
