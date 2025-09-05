import React from "react";

import SearchBarFilter from "./components/searchBar/SearchBarFilter";
import Checkbox from "../../../../checkBox/CheckBox";

// interface FilterOption {
//   id: number;
//   name: string;
// }

interface FilterBoxProps {
  title: string;
  authors: string[];
  publishers: string[];
  selectedAuthors: string[];
  setSelectedAuthors: (selectedAuthors: string[]) => void;
  selectedPublishers: string[];
  setSelectedPublishers: (selectedPublishers: string[]) => void;
}
const AuthorPublisherFilter = ({
  title,
  authors,
  publishers,
  selectedAuthors,
  setSelectedAuthors,
  selectedPublishers,
  setSelectedPublishers,
}: FilterBoxProps) => {
  console.log(
    selectedAuthors,
    setSelectedAuthors,
    selectedPublishers,
    setSelectedPublishers,
  );
  return (
    <div className="w-[304px] h-[364px] p-[16px] gap-[16px] rounded-[4px] border-[1px] border-[#EBEBEB] bg-white flex flex-col justify-between items-start">
      {title === "نویسنده، مترجم یا راوی" ? (
        <>
          <div>
            <p className="h-[22px]">نویسنده، مترجم یا راوی</p>
          </div>
          <div className="w-[272px] h-[38px] border-[1px] border-[#C3C3C3] rounded-[8px] bg-white">
            <SearchBarFilter />
          </div>
          <div className="w-full h-[240px] flex flex-col justify-between items-start gap-[16px]">
            {authors.map((item) => (
              <label
                key={item}
                className="w-full h-[20px] flex flex-row justify-start items-start gap-[8px] text-[#161616]"
              >
                <Checkbox />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="h-[22px]">ناشر</p>
          </div>
          <div className="w-[272px] h-[38px] border-[1px] border-[#C3C3C3] rounded-[8px] bg-white">
            <SearchBarFilter />
          </div>
          <div className="w-full h-[240px] flex flex-col justify-between items-start gap-[16px]">
            {publishers.map((item) => (
              <label
                key={item}
                className="w-full h-[20px] flex flex-row justify-start items-start gap-[8px] text-[#161616]"
              >
                <Checkbox />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AuthorPublisherFilter;
