"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import FilterForeignStories from "./components/filterText/FilterForeignStories";
import FilterStoriesBook from "./components/filterText/FilterStoriesBook";
import FilterTextBooks from "./components/filterText/FilterTextBooks";

import Button from "@/components/button/Button";
import { MainCategory } from "@/type/book";

interface contentProp {
  allcategories: MainCategory[];
  selectedCategories: string[];
  setSelectedCategories: Dispatch<
    SetStateAction<
      ("داستان و رمان" | "داستان و رمان خارجی" | "کتاب های متنی")[]
    >
  >;
}
const FilterText = ({ allcategories, setSelectedCategories }: contentProp) => {
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const textBooksRef = useRef<HTMLDivElement>(null);
  // const storiesRef = useRef<HTMLDivElement>(null);
  // const foreignRef = useRef<HTMLDivElement>(null);
  // console.log("textBooksRef ", textBooksRef);
  // console.log("storiesRef", storiesRef);
  // console.log("foreignRef", foreignRef);
  const toggleDropdown = (
    menu: "داستان و رمان" | "داستان و رمان خارجی" | "کتاب های متنی",
  ) => {
    if (menu === "کتاب های متنی") {
      if (isTextBooksOpen) {
        setIsTextBooksOpen(false);
      } else {
        setIsTextBooksOpen(true);
        setIsStoriesOpen(false);
        setIsForeignStoriesOpen(false);
      }
    }
    if (menu === "داستان و رمان") {
      if (isStoriesOpen) {
        setIsStoriesOpen(false);
      } else {
        setIsStoriesOpen(true);
        setIsTextBooksOpen(false);
        setIsForeignStoriesOpen(false);
      }
    }
    if (menu === "داستان و رمان خارجی") {
      if (isForeignStoriesOpen) {
        setIsForeignStoriesOpen(false);
      } else {
        setIsForeignStoriesOpen(true);
        setIsTextBooksOpen(false);
        setIsStoriesOpen(false);
      }
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if (
      //   (!textBooksRef.current ||
      //     !textBooksRef.current.contains(event.target as Node)) &&
      //   (!storiesRef.current ||
      //     !storiesRef.current.contains(event.target as Node)) &&
      //   (!foreignRef.current ||
      //     !foreignRef.current.contains(event.target as Node))
      // ) {
      //   setIsTextBooksOpen(false);
      //   setIsStoriesOpen(false);
      //   setIsForeignStoriesOpen(false);
      // }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsTextBooksOpen(false);
        setIsStoriesOpen(false);
        setIsForeignStoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // const useOutsideClick = (close: () => void) => {
  //   useEffect(() => {
  //     const handleClick = () => {
  //       close();
  //     };
  //     document.addEventListener("mousedown", handleClick);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClick);
  //     };
  //   }, [close]);
  // };
  // useOutsideClick(() => {
  //   if (isTextBooksOpen) {
  //     setIsTextBooksOpen(false);
  //   } else {
  //     setIsTextBooksOpen(true);
  //   }
  // });
  // useOutsideClick(() => {
  //   if (isStoriesOpen) {
  //     setIsStoriesOpen(false);
  //   } else {
  //     setIsStoriesOpen(true);
  //   }
  // });
  // useOutsideClick(() => {
  //   if (isForeignStoriesOpen) {
  //     setIsForeignStoriesOpen(false);
  //   } else {
  //     setIsForeignStoriesOpen(true);
  //   }
  // });
  // function onClickHandler(all: MainCategory) {
  //   // if(isTextBooksOpen){setIsTextBooksOpen(false)}
  //   // setIsTextBooksOpen(!isTextBooksOpen);
  //   setSelectedCategories((prev) =>
  //     prev.includes(all) ? prev.filter((c) => c !== all) : [...prev, all],
  //   );
  // }
  function onClickHandler(all: MainCategory) {
    setSelectedCategories((prev) =>
      prev.includes(all) ? prev.filter((c) => c !== all) : [...prev, all],
    );
  }
  return (
    <div
      className="w-[304px] h-[240px] bg-white border-[1px] border-[#EBEBEB] p-[16px] rounded-[4px] flex flex-col relative"
      ref={dropdownRef}
    >
      <div className="text-[16px] border-b border-[#EBEBEB] pb-[16px]">
        همه ی دسته های موضوعی
      </div>
      <nav className="flex flex-col justify-between items-start text-[#343434] text-[16px]">
        {allcategories.map((all) => (
          <Button
            key={all}
            styles=" "
            variant="publicButton"
            className="w-full flex justify-start items-center gap-[4px] cursor-pointer border-b last:border-b-0 border-[#EBEBEB] py-[16px]"
            onClickHandler={() => {
              onClickHandler(all);
              if (all === "کتاب های متنی") toggleDropdown("کتاب های متنی");
              if (all === "داستان و رمان") toggleDropdown("داستان و رمان");
              if (all === "داستان و رمان خارجی")
                toggleDropdown("داستان و رمان خارجی");
            }}
            // onClickHandler={(all) =>
            //   setSelectedCategories((prev) =>
            //     prev.includes(all)
            //       ? prev.filter((c) => c !== all)
            //       : [...prev, all]
            //   )
            // }
          >
            <p>{all}</p>
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
        ))}

        {/* <Button
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
          className="w-full flex justify-start items-center gap-[4px] cursor-pointer py-[16px]"
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
        </Button> */}
      </nav>
      {isTextBooksOpen && (
        <div
          // ref={textBooksRef}
          className="w-full h-[400px] absolute z-1000 top-[120px] right-0"
        >
          <FilterTextBooks setIsTextBooksOpen={setIsTextBooksOpen} />
        </div>
      )}
      {isStoriesOpen && (
        <div
          // ref={storiesRef}
          className="w-full h-[80px] absolute z-1000 top-[171px] right-0"
        >
          <FilterStoriesBook setIsStoriesOpen={setIsStoriesOpen} />
        </div>
      )}
      {isForeignStoriesOpen && (
        <div
          // ref={foreignRef}
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
