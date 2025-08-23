import React from "react";

import Button from "@/components/button/Button";

const SuggestedBooks = () => {
  return (
    <div className="w-full h-full">
      <div className="w-[146px] mb-[24px]">
        <p className="text-[16px] text-white"> کتاب های پیشنهادی</p>
      </div>
      <ul className="w-[122px] text-white text-[12px] font-light list-disc list-inside flex flex-col justify-between gap-[12px] pb-[56px]">
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            وقتی نیچه گریست{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            ملت عشق{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            اثر مرکب{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            نیمه تاریک وجود{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            صد سال تنهایی{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            بیشعوری{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            نیمه تاریک وجود{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            صدسال تنهایی{" "}
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles=" " variant="publicButton" className="">
            بیشعوری{" "}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SuggestedBooks;
