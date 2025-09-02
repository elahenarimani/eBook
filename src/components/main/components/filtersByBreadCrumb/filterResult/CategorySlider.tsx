import React from "react";

import BookCarousel from "@/components/bookCarousel/BookCarousel";
import Button from "@/components/button/Button";
import { books } from "@/data/books";
import { Book } from "@/type/book";

interface CategorySlider {
  filteredBook: Book[];
  matchedTags: string[];
}
const CategorySlider = ({ filteredBook, matchedTags }: CategorySlider) => {
  function findSliderTitle(title: string): Book[] {
    return books.filter((book) => book.tags.includes(title));
  }
  return (
    <div className="!max-w-[350px] h-full sm:!w-full sm:!min-w-full flex flex-col justify-between items-center gap-[34px] bg-[#F5F6F8]">
      {filteredBook.map((book, index) => {
        const sliderTitle = matchedTags[index];
        const sliderBooks = findSliderTitle(sliderTitle);
        return (
          <div
            className="w-full h-full flex flex-col justify-between items-center gap-[12px]"
            key={book.id}
          >
            <div className="w-full h-full flex flex-row justify-between items-center">
              <p className="h-full text-[14px] truncate sm:text-[24px] sm:font-bold pb-[2px]">
                {matchedTags[index]}
              </p>
              <div>
                <Button
                  variant="Tertiary"
                  className="px-[12px] py-[8px] flex justify-between items-center gap-[2px]"
                >
                  <p className="text-[14px] sm:text-[16px] text-[#744D7E] truncate pb-[2px]">
                    مشاهده بیشتر
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6669 13.8339C10.5342 13.8345 10.4068 13.7816 10.3135 13.6872L4.98021 8.35388C4.78524 8.15867 4.78524 7.84243 4.98021 7.64722L10.3135 2.31388C10.5106 2.13031 10.8176 2.13573 11.008 2.32613C11.1984 2.51654 11.2038 2.82354 11.0202 3.02055L6.04021 8.00055L11.0202 12.9805C11.2152 13.1758 11.2152 13.492 11.0202 13.6872C10.927 13.7816 10.7996 13.8345 10.6669 13.8339Z"
                      fill="#744D7E"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <BookCarousel sliderBooks={sliderBooks} />
          </div>
        );
      })}
    </div>
  );
};

export default CategorySlider;
