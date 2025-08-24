import React from "react";

import "./headerDes.css";

import HeaderActions from "./component/headerDes/HeaderActions";
import ServicesSection from "./component/headerDes/ServicesSection";

const HeaderDes = () => {
  return (
    <div className="headerDes-container hidden sm:block w-full h-[150px] rounded-br-[12px] rounded-bl-[12px] shadow-[0px_2px_8px_0px_#0000001F] sticky z-10">
      <div className="headerDes flex flex-col gap-[24px] h-full max-w-[1440px] xl:mx-auto pt-[20px] pb-[80px] sm:px-[40px] xl:px-[80px]">
        <HeaderActions />
        <ServicesSection />
      </div>
    </div>
  );
};

export default HeaderDes;
