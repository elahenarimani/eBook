import React from "react";

import SearchBarFilter from "./components/searchBar/SearchBarFilter";
import Checkbox from "../../../checkBox/CheckBox";

interface FilterOption {
  id: number;
  name: string;
}

interface FilterBoxProps {
  title: string;
  options: FilterOption[];
}
const AuthorPublisherFilter = ({ title, options }: FilterBoxProps) => {
  return (
    <div className="w-[304px] h-[364px] p-[16px] gap-[16px] rounded-[4px] border-[1px] border-[#EBEBEB] bg-white flex flex-col justify-between items-start">
      <div>
        <p className="h-[22px]">{title}</p>
      </div>
      <div className="w-[272px] h-[38px] border-[1px] border-[#C3C3C3] rounded-[8px] bg-white">
        <SearchBarFilter />
      </div>
      <div className="w-full h-[240px] flex flex-col justify-between items-start gap-[24px]">
        {options.map((item) => (
          <label
            key={item.id}
            className="w-full h-[20px] flex flex-row justify-start items-start gap-[8px] text-[#161616]"
          >
            <Checkbox />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AuthorPublisherFilter;
