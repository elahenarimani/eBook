import React from "react";

import Button from "@/components/button/Button";

const SuggestedCategories = () => {
  return (
    <div className="w-full h-full">
      <div className="w-[146px] mb-[24px]">
        <p className="text-[16px] text-white">دسته بندی پیشنهادی</p>
      </div>
      <ul className="w-[122px] text-white text-[12px] font-light list-disc list-inside flex flex-col justify-between gap-[12px] pb-[56px]">
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب رایگان
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب صوتی
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب کودک
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب تاریخ
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب شعر
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب داستان
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب فلسفه
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب عاشقانه
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            کتاب ایران
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SuggestedCategories;
