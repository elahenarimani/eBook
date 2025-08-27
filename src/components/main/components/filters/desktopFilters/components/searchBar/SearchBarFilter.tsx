"use client";
import React, { useEffect, useState } from "react";

import Input from "../../../../../../input/Input";

import { books } from "@/data/books";
import { Book } from "@/type/book";

const SearchBarFilter = () => {
  const [searchّFilter, setSearchFilter] = useState<string>("");
  const [debounceSearchFilter, setDebounceSearch] = useState<string>("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearch(searchّFilter);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchّFilter]);

  const searchResult: Book[] = debounceSearchFilter
    ? books.filter(
        (book) =>
          book.tags.some((tag) => tag.includes(debounceSearchFilter)) ||
          book.title.includes(debounceSearchFilter),
      )
    : [];
  return (
    <div className="w-full h-full flex flex-row justify-between items-center gap-[4px] px-[8px] py-[4px] ">
      <Input
        placeholder="جستجو"
        className="w-full h-full text-[12px] font-light placeholder-text-[#8A8A8A] outline-none"
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchFilter(e.target.value)
        }
        value={searchّFilter}
        aria-label="searching"
      />
      <div className="w-[20px] h-[20px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.438 6.45115C16.2344 3.56108 13.4143 1.67525 10.2837 1.66689C6.9096 1.64912 3.90943 3.81034 2.85766 7.01637C1.80589 10.2224 2.94277 13.7408 5.67169 15.7252C8.40061 17.7096 12.0982 17.7067 14.8239 15.7179L17.2543 18.1483C17.5015 18.3951 17.9018 18.3951 18.1489 18.1483C18.3957 17.9012 18.3957 17.5009 18.1489 17.2538L15.7944 14.8993C17.9937 12.6713 18.6415 9.34122 17.438 6.45115ZM16.3095 11.9363C15.299 14.3715 12.9203 15.9576 10.2837 15.9542V15.9204C6.7053 15.9159 3.80036 13.026 3.77719 9.44769C3.77378 6.81111 5.35984 4.4324 7.79507 3.42185C10.2303 2.41129 13.0345 2.96815 14.8989 4.83249C16.7632 6.69684 17.3201 9.50108 16.3095 11.9363Z"
            fill="#8A8A8A"
          />
        </svg>
      </div>

      <div
        className={`absolute w-full mt-1 h-[400px] border-[1px] border-[#C3C3C3] rounded-[16px] px-[4px] pr-[6px] overflow-auto bg-white shadow-lg z-50 top-[100px] right-[8px] left-[8px] ${
          debounceSearchFilter ? "block" : "hidden"
        }`}
      >
        {debounceSearchFilter &&
          (searchResult.length > 0 ? (
            searchResult.map((item) => (
              <div
                key={item.id}
                className="w-full px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-400">نتیجه‌ای پیدا نشد.</p>
          ))}
      </div>
    </div>
  );
};

export default SearchBarFilter;
