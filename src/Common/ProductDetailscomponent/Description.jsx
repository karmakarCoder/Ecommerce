import React from "react";

const Description = ({ data }) => {
  console.log(data.description);
  return (
    <>
      <div className="pt-10">
        <p className="font-DMsans font-normal text-secondaryFontColor text-xl max-w-[900px]">
          {data.description}
        </p>
      </div>
    </>
  );
};

export default Description;
