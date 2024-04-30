import React, { useEffect } from "react";

import ShopTop from "../Common/ShopRightitem/ShopTop";
import ShopBottom from "../Common/ShopRightitem/ShopBottom";

const ShopRight = ({ className }) => {

  return (
    <>
      <div className={className}>
        <div>
          <ShopTop />
        </div>

        <div>
          <ShopBottom/>
        </div>
      </div>
    </>
  );
};

export default ShopRight;
