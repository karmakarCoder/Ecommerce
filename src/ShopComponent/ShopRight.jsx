import React, { createContext, useState } from "react";
import ShopTop from "../Common/ShopRightitem/ShopTop";
import ShopBottom from "../Common/ShopRightitem/ShopBottom";
export const shopRightPageContext = createContext();

const ShopRight = ({ className }) => {
  const [showPage, setshowPage] = useState(9);
  const [gridLayout, setgridLayout] = useState(false);

  const onChangeLayout = () => {
    setgridLayout(!gridLayout);
  };

  const HandlePagination = (event) => {
    setshowPage(event.target.innerText);
  };

  const shoprightBottomItem = {
    showPage,
    gridLayout,
  };
  return (
    <>
      <div className={className}>
        <div>
          <ShopTop
            pageValue={HandlePagination}
            onChangeLayout={onChangeLayout}
            layoutValue={gridLayout}
          />
        </div>

        <shopRightPageContext.Provider value={shoprightBottomItem}>
          <ShopBottom />
        </shopRightPageContext.Provider>
      </div>
    </>
  );
};

export default ShopRight;
