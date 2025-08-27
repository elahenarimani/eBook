import React from "react";

import Button from "@/components/button/Button";
interface FilterProps {
  setIsForeignStoriesOpen: (isForeignStoriesOpen: boolean) => void;
}

const FilterForeignStories = ({ setIsForeignStoriesOpen }: FilterProps) => {
  const handleItemClick = () => {
    setIsForeignStoriesOpen(false);
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
            درام{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            فانتزی{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            داستان کوتاه{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            جنایی و پلیسی{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            عاشقانه{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            معمایی{" "}
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            تاریخی
          </Button>
        </li>
        <li>
          <Button
            styles=" "
            variant="publicButton"
            className="w-full h-full cursor-pointer"
            onClickHandler={handleItemClick}
          >
            طنز{" "}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default FilterForeignStories;
