import React from "react";

import Button from "@/components/button/Button";
interface FilterProps {
  setIsStoriesOpen: (isStoriesOpen: boolean) => void;
}

const FilterStoriesBook = ({ setIsStoriesOpen }: FilterProps) => {
  const handleItemClick = () => {
    setIsStoriesOpen(false);
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
            داستان و رمان ایرانی{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            داستان و رمان خارجی{" "}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default FilterStoriesBook;
