import React from "react";

import BookInfoSection from "./component/BookInfoSection";
import ImageSection from "./component/ImageSection";

import { Book } from "@/type/book";
interface BookProp {
  matchedTags: string[];
  filteredBook: Book[];
}
const BookCardVer = ({ matchedTags, filteredBook }: BookProp) => {
  return (
    <div className="!w-[167px] h-[374px] sm:w-[197px] sm:h-[417px] flex flex-col justify-between items-center rounded-[8px] relative">
      <ImageSection matchedTags={matchedTags} filteredBook={filteredBook} />
      <BookInfoSection matchedTags={matchedTags} filteredBook={filteredBook} />
    </div>
  );
};

export default BookCardVer;
