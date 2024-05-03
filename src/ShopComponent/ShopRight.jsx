import React, { createContext, useState } from "react";
import ShopTop from "../Common/ShopRightitem/ShopTop";
import ShopBottom from "../Common/ShopRightitem/ShopBottom";
export const shopRightPageContext = createContext();

const ShopRight = ({ className }) => {
  const [showPage, setshowPage] = useState(9);

  const HandlePagination = (event) => {
    setshowPage(event.target.innerText);
  };
  return (
    <>
      <div className={className}>
        <div>
          <ShopTop pageValue={HandlePagination} />
        </div>

        <shopRightPageContext.Provider value={showPage}>
          <ShopBottom />
        </shopRightPageContext.Provider>
      </div>
    </>
  );
};

export default ShopRight;
