import React from "react";
interface TestProp {
  allData: string[];
}
const Test = ({ allData }: TestProp) => {
  return (
    // <div className="text-red-600 font-semibold text-center">
    //   {allData.map((item) => (
    //     <p key={item}>{item}</p>
    //   ))}
    // </div>
    <div className="w-[350px] h-[60px]">
      <ul className="h-ful text-[#787878] text-[14px] flex flex-wrap gap-x-[4px]">
        {allData.map((type) => (
          <li
            key={type}
            className="h-[28px] px-[12px] rounded-[24px] border-[1px] border-[#C3C3C3] flex justify-center items-center cursor-pointer"
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
