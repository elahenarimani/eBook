import React from "react";

import Button from "@/components/button/Button";

const ContentType = () => {
  return (
    <div className="w-[304px] h-[190px] bg-white border-[1px] border-[#EBEBEB] p-[16px] gap-[16px] rounded-[4px] flex flex-col">
      <div className="text-[16px] border-b border-[#EBEBEB] pb-[16px]">
        نوع محتوا{" "}
      </div>
      <div className="flex flex-col justify-between items-start gap-[16px] text-[#343434] text-[16px]">
        <Button
          styles=" "
          variant="publicButton"
          className="cursor-pointer"
          // onClickHandler={() => setIsOpen(!isOpen)}
        >
          کتاب متنی
        </Button>
        <Button
          styles=" "
          variant="publicButton"
          className="cursor-pointer"
          // onClickHandler={() => setIsOpen(!isOpen)}
        >
          کتاب صوتی{" "}
        </Button>
        <Button
          styles=" "
          variant="publicButton"
          className="cursor-pointer"
          // onClickHandler={() => setIsOpen(!isOpen)}
        >
          مجله{" "}
        </Button>
      </div>
    </div>
  );
};

export default ContentType;
