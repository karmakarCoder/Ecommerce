import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <div className="w-[200px] h-[10px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[152px] h-[8px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[220px] h-[10px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[200px] h-[8px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[150px] h-[12px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[250px] h-[10px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[200px] h-[8px] bg-[#ebebeb] animate-pulse"></div>
        <div className="w-[145px] h-[15px] bg-[#ebebeb] animate-pulse"></div>
      </div>
    </>
  );
};

export default Loading;
