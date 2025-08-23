import React from "react";

import ContactLinks from "./component/footerDesk/ContactLinks";
import DownloadAppCard from "./component/footerDesk/DownloadAppCard";
import SuggestedBooks from "./component/footerDesk/SuggestedBooks";
import SuggestedCategories from "./component/footerDesk/SuggestedCategories";
import Support from "./component/footerDesk/Support";

const FooterDes = () => {
  return (
    <div className="hidden sm:flex w-full h-[498] bg-[#311D35] py-[36px] px-[80px] flex-col justify-start items-center gap-[24px]">
      <div className="w-full h-[388px] flex flex-row justify-between items-start">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-row justify-start items-start gap-[80px]">
            <ContactLinks />
            <SuggestedCategories />
            <SuggestedBooks />
          </div>
        </div>
        <div className="w-[324px] h-[316px]">
          <DownloadAppCard />
        </div>
      </div>
      <div className="w-full border-b-[1px] border-[#EBEBEB]"></div>
      <div className="w-full h-[40px]">
        <Support />
      </div>
    </div>
  );
};

export default FooterDes;
