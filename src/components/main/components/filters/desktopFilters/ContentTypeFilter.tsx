import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/button/Button";
import { ContentType } from "@/type/book";
interface FilterProos {
  contentTypes: ContentType[];
  selectedContentTypes: string[];
  setSelectedContentTypes: Dispatch<SetStateAction<string[]>>;
}
const ContentTypeFilter = ({
  contentTypes,
  // selectedContentTypes,
  setSelectedContentTypes,
}: FilterProos) => {
  return (
    <div className="w-[304px] h-[190px] bg-white border-[1px] border-[#EBEBEB] p-[16px] gap-[16px] rounded-[4px] flex flex-col">
      <div className="text-[16px] border-b border-[#EBEBEB] pb-[16px]">
        نوع محتوا{" "}
      </div>
      <div className="flex flex-col justify-between items-start gap-[16px] text-[#343434] text-[16px]">
        {contentTypes.map((cat) => (
          <Button
            key={cat}
            styles=" "
            variant="publicButton"
            className="cursor-pointer"
            onClickHandler={() =>
              setSelectedContentTypes((prev) =>
                prev.includes(cat)
                  ? prev.filter((c) => c !== cat)
                  : [...prev, cat],
              )
            }
          >
            {cat}{" "}
          </Button>
        ))}

        {/* <Button
          styles=" "
          variant="publicButton"
          className="cursor-pointer"
          // onClickHandler={() => setIsOpen(!isOpen)}
        >
          کتاب صوتی{" "}
        </Button>
        <Button
          styles=" "
          variant="publicButton"
          className="cursor-pointer"
          // onClickHandler={() => setIsOpen(!isOpen)}
        >
          مجله{" "}
        </Button> */}
      </div>
    </div>
  );
};

export default ContentTypeFilter;
