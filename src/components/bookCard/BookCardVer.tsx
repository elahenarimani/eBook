import React from "react";

import BookInfoSection from "./component/BookInfoSection";
import ImageSection from "./component/ImageSection";

interface BookProp {
  titleOfBook: string;
  author: string;
  image: string;
  discount: number;
  price: number;
  rating: number;
  reviewsComment: number;
}

const BookCardVer = ({
  titleOfBook,
  author,
  image,
  discount,
  price,
  rating,
  reviewsComment,
}: BookProp) => {
  return (
    <div className="!w-[167px] h-[374px] sm:w-[197px] sm:h-[417px] flex flex-col justify-between items-center rounded-[8px] relative">
      <ImageSection image={image} />
      <BookInfoSection
        author={author}
        titleOfBook={titleOfBook}
        discount={discount}
        price={price}
        rating={rating}
        reviewsComment={reviewsComment}
      />
    </div>
  );
};

export default BookCardVer;
