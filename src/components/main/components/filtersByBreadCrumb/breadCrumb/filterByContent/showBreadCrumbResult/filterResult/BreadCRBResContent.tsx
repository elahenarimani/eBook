// import React from "react";
// interface BreadResProp {
//   allData: string[];
// }
// const BreadCRBResContent = ({ allData }: BreadResProp) => {
//   return;
//   <div className="w-[350px] h-[60px]">
//     <ul className="h-ful text-[#787878] text-[14px] flex flex-wrap gap-x-[4px]">
//       {allData.map((type) => (
//         <li
//           key={type}
//           className="h-[28px] px-[12px] rounded-[24px] border-[1px] border-[#C3C3C3] flex justify-center items-center cursor-pointer"
//         >
//           {type}
//         </li>
//       ))}
//     </ul>
//   </div>;
// };

// export default BreadCRBResContent;

"use client";
import React, { useState } from "react";

import CategorySlider from "./CategorySlider";

import Button from "@/components/button/Button";
import { Book } from "@/type/book";
import { books } from "@/data/books";
interface BreadResProp {
  allData: string[];
}

const BreadCRBResContent = ({ allData }: BreadResProp) => {
  const [selected, setSelected] = useState<string | null>(null);
  function filterBooksBySelection(
    books: Book[],
    selected: string | null
  ): Book[] {
    if (!selected) return books;

    const query = selected.toLowerCase();

    return books.filter((book) => {
      const inTags = book.tags.some((tag) => tag.toLowerCase().includes(query));
      const inContentType = book.contentType.toLowerCase().includes(query);
     const inCategory = book.category
      ? book.category.toLowerCase().includes(query)
      : false;
      const inSubCategory = book.subCategory?.some((sub) =>
        sub.toLowerCase().includes(query)
      );

      return inTags || inContentType || inCategory || inSubCategory;
    });
  }

  return (
    <div className="bread-crumb-result w-[350px] h-full">
      <div className="h-[60px] text-[14px] flex flex-wrap gap-x-[4px]">
        {allData.map((type) => (
          <Button
            variant="publicButton"
            onClickHandler={() => setSelected(type)}
            key={type}
            className={`h-[28px] px-[12px] rounded-[24px] border-[1px] border-[#C3C3C3] flex justify-center items-center cursor-pointer focus:border-[#744D7E] ${selected === type ? "text-[#744D7E]" : "text-[#787878]"}`}
          >
            {type}
          </Button>
        ))}
      </div>
      {selected && (
        <CategorySlider
          slug=""
          books={filterBooksBySelection(books, selected)}
        />
      )}
    </div>
  );
};

export default BreadCRBResContent;
