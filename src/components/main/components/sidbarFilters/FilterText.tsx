"use client";
import React, { useEffect, useRef, useState } from "react";

import FilterForeignStories from "./components/filterText/FilterForeignStories";
import FilterStoriesBook from "./components/filterText/FilterStoriesBook";
import FilterTextBooks from "./components/filterText/FilterTextBooks";

import Button from "@/components/button/Button";

const FilterText = () => {
  const [isTextBooksOpen, setIsTextBooksOpen] = useState<boolean>(false);
  const [isStoriesOpen, setIsStoriesOpen] = useState<boolean>(false);
  const [isForeignStoriesOpen, setIsForeignStoriesOpen] =
    useState<boolean>(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsTextBooksOpen(false);
  //       setIsStoriesOpen(false);
  //       setIsForeignStoriesOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const textBooksRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const foreignRef = useRef<HTMLDivElement>(null);

  // تابع مشترک برای بستن منوها با کلیک خارج
  const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement | null>,
    close: () => void,
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          close();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, close]);
  };

  // فعال کردن hook برای هر منو
  useOutsideClick(textBooksRef, () => setIsTextBooksOpen(false));
  useOutsideClick(storiesRef, () => setIsStoriesOpen(false));
  useOutsideClick(foreignRef, () => setIsForeignStoriesOpen(false));
  return (
    <div
      className="w-[304px] h-[240px] bg-white border-[1px] border-[#EBEBEB] p-[16px] rounded-[4px] flex flex-col relative"
      // ref={dropdownRef}
    >
      <div className="text-[16px] border-b border-[#EBEBEB] pb-[16px]">
        همه ی دسته های موضوعی
      </div>
      <nav className="flex flex-col justify-between items-start text-[#343434] text-[16px]">
        <Button
          styles=" "
          variant="publicButton"
          className="w-full flex justify-start items-center gap-[4px] cursor-pointer border-b border-[#EBEBEB] py-[16px]"
          onClickHandler={() => setIsTextBooksOpen(!isTextBooksOpen)}
        >
          <p> کتاب متنی</p>
          <div className="w-[20px] h-[20px]">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0007 14.1579C9.8348 14.1587 9.67559 14.0926 9.55902 13.9746L2.89235 7.30791C2.66289 7.06165 2.66966 6.6779 2.90767 6.43989C3.14568 6.20188 3.52943 6.19511 3.77569 6.42458L10.0007 12.6496L16.2257 6.42458C16.4719 6.19511 16.8557 6.20188 17.0937 6.43989C17.3317 6.6779 17.3385 7.06165 17.109 7.30791L10.4424 13.9746C10.3258 14.0926 10.1666 14.1587 10.0007 14.1579Z"
                fill="#666666"
              />
            </svg>
          </div>
        </Button>
        <Button
          styles=" "
          variant="publicButton"
          className="w-full flex justify-start items-center gap-[4px] cursor-pointer border-b border-[#EBEBEB] py-[16px]"
          onClickHandler={() => setIsStoriesOpen(!isStoriesOpen)}
        >
          <p> داستان و رمان</p>
          <div className="w-[20px] h-[20px]">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0007 14.1579C9.8348 14.1587 9.67559 14.0926 9.55902 13.9746L2.89235 7.30791C2.66289 7.06165 2.66966 6.6779 2.90767 6.43989C3.14568 6.20188 3.52943 6.19511 3.77569 6.42458L10.0007 12.6496L16.2257 6.42458C16.4719 6.19511 16.8557 6.20188 17.0937 6.43989C17.3317 6.6779 17.3385 7.06165 17.109 7.30791L10.4424 13.9746C10.3258 14.0926 10.1666 14.1587 10.0007 14.1579Z"
                fill="#666666"
              />
            </svg>
          </div>
        </Button>
        <Button
          styles=" "
          variant="publicButton"
          className="w-full flex justify-start items-center gap-[4px] cursor-pointer border-b border-[#EBEBEB] py-[16px]"
          onClickHandler={() => setIsForeignStoriesOpen(!isForeignStoriesOpen)}
        >
          <p> داستان و رمان خارجی</p>
          <div className="w-[20px] h-[20px]">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0007 14.1579C9.8348 14.1587 9.67559 14.0926 9.55902 13.9746L2.89235 7.30791C2.66289 7.06165 2.66966 6.6779 2.90767 6.43989C3.14568 6.20188 3.52943 6.19511 3.77569 6.42458L10.0007 12.6496L16.2257 6.42458C16.4719 6.19511 16.8557 6.20188 17.0937 6.43989C17.3317 6.6779 17.3385 7.06165 17.109 7.30791L10.4424 13.9746C10.3258 14.0926 10.1666 14.1587 10.0007 14.1579Z"
                fill="#666666"
              />
            </svg>
          </div>
        </Button>
      </nav>
      {isTextBooksOpen && (
        <div
          ref={textBooksRef}
          className="w-full h-[400px] absolute z-1000 top-[120px] right-0"
        >
          <FilterTextBooks setIsTextBooksOpen={setIsTextBooksOpen} />
        </div>
      )}
      {isStoriesOpen && (
        <div
          ref={storiesRef}
          className="w-full h-[80px] absolute z-1000 top-[171px] right-0"
        >
          <FilterStoriesBook setIsStoriesOpen={setIsStoriesOpen} />
        </div>
      )}
      {isForeignStoriesOpen && (
        <div
          ref={foreignRef}
          className="w-full h-[277px] absolute z-1000 top-[232px] right-0"
        >
          <FilterForeignStories
            setIsForeignStoriesOpen={setIsForeignStoriesOpen}
          />
        </div>
      )}
    </div>
  );
};

export default FilterText;
