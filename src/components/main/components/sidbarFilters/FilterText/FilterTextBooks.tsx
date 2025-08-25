import React from "react";

import Button from "@/components/button/Button";
interface FilterProps {
  setIsTextBooksOpen: (isTextBooksOpen: boolean) => void;
}

const FilterTextBooks = ({ setIsTextBooksOpen }: FilterProps) => {
  const handleItemClick = () => {
    setIsTextBooksOpen(false);
  };
  return (
    <div className="w-full h-full bg-white p-[16px] rounded-[4px] font-light text-[12px] text-[#343434]">
      <ul className="w-full h-full flex flex-col justify-between items-start !gap-[16] cursor-pointer">
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            داستان و رمان
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            روانشناسی{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            مدیریت و بازاریابی
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            علوم اجتماعی
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            ادبیات
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            تاریخ
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            هنر
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            آموزشی
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            زندگینامه و سفرنامه
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            ازدواج و خانواده
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            فلسفه و عرفان{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            ازدواج و خانواده{" "}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default FilterTextBooks;
