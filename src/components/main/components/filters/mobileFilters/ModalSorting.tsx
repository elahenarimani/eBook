/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import Button from "@/components/button/Button";
import Checkbox from "@/components/checkBox/CheckBox";

type SortingOptions = string[];
const ModalSorting = () => {
  const sortingOptions: SortingOptions = [
    "پر فروش ترین",
    "جدید ترین",
    "گران ترین",
    "ارزان ترین",
    "محبوب ترین",
  ];
  return (
    <div className="sm:hidden w-full min-h-screen fixed inset-0 flex justify-end items-end bg-[#F5F6F8]/90 z-50">
      <div className="w-[390px] !h-[272px] rounded-[8px] p-[16px] gap-[16px] flex flex-col justify-between items-start bg-white">
        <p className="font-semibold text-[#444444]">نمایش بر اساس</p>
        <div className="flex h-full w-full flex-col gap-3">
          {sortingOptions.map((option) => (
            <label
              key={option}
              className="flex h-[20px] w-full flex-row items-center gap-2 text-[14px] text-[#444444]"
            >
              <Checkbox />
              <span className="pb-[4px]">{option}</span>
            </label>
          ))}
        </div>
        <div className="w-[358px] !h-[38px]">
          <Button
            variant="Primary"
            className="w-full h-full font-semibold flex justify-center items-center !pt-[5px]"
          >
            اعمال فیلتر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalSorting;
