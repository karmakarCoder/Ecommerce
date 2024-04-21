import React from "react";

const Button = ({ className, children }) => {
  return (
    <>
      <button
        className={`py-4 px-14 bg-primaryFontColor text-white font-DMsans font-bold text-sm ${className}`}
      >
        {children ? children : "Button"}
      </button>
    </>
  );
};

export default Button;
