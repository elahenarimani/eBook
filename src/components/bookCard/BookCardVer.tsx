import React from "react";

import BookInfoSection from "./component/BookInfoSection";
import ImageSection from "./component/ImageSection";

const BookCardVer = () => {
  return (
    <div className="!w-[167px] h-[374px] sm:w-[197px] sm:h-[417px] flex flex-col justify-between items-center rounded-[8px] relative">
      <ImageSection />
      <BookInfoSection />
    </div>
  );
};

export default BookCardVer;
