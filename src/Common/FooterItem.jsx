import React from "react";

const FooterItem = ({ allitem = ["1", "2", "3"], title }) => {
  return (
    <>
      <ul>
        <p className="text-[#262626] font-DMsans font-bold text-lg pb-4">
          {title}
        </p>
        {allitem.map((item) => (
          <li className="text-[#6D6D6D] font-DMsans font-normal text-sm pb-[6px] hover:underline">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterItem;
