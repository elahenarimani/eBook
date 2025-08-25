"use client";
import React, { useEffect, useState } from "react";

import Input from "../../input/Input";

import { books } from "@/data/books";
import { Book } from "@/type/book";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [debounceSearch, setDebounceSearch] = useState<string>("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const searchResult: Book[] = debounceSearch
    ? books.filter(
        (book) =>
          book.tags.some((tag) => tag.includes(debounceSearch)) ||
          book.title.includes(debounceSearch),
      )
    : [];
  return (
    <div className="w-full h-full border-[1px] border-[#C3C3C3] rounded-[8px] px-[4px] pr-[6px] pl-[10px] flex justify-between items-center">
      <Input
        placeholder="جستجو در کنج"
        aria-label="searching"
        className="w-full h-full outline-none"
        type="text"
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        value={search}
      />

      <svg
        width="16"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1826 5.15953C13.2197 2.84748 10.9637 1.33881 8.45918 1.33212C5.7599 1.3179 3.35977 3.04688 2.51835 5.61171C1.67693 8.17653 2.58644 10.9913 4.76958 12.5788C6.95272 14.1663 9.91075 14.1639 12.0913 12.5729L14.0357 14.5173C14.2334 14.7147 14.5536 14.7147 14.7513 14.5173C14.9488 14.3196 14.9488 13.9993 14.7513 13.8017L12.8677 11.9181C14.6272 10.1356 15.1455 7.47158 14.1826 5.15953ZM13.2799 9.54766C12.4714 11.4958 10.5684 12.7647 8.45918 12.762V12.735C5.59646 12.7313 3.27252 10.4194 3.25398 7.55676C3.25125 5.44749 4.5201 3.54453 6.46828 2.73609C8.41647 1.92764 10.6599 2.37313 12.1513 3.8646C13.6428 5.35608 14.0883 7.59947 13.2799 9.54766Z"
          fill="#B0B0B0"
        />
      </svg>

      <div
        className={`absolute w-full mt-1 h-[400px] border-[1px] border-[#C3C3C3] rounded-[16px] px-[4px] pr-[6px] overflow-auto bg-white shadow-lg z-50 top-[100px] right-[8px] left-[8px] ${
          debounceSearch ? "block" : "hidden"
        }`}
      >
        {debounceSearch &&
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

export default SearchBar;
