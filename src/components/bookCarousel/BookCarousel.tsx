"use client";
import React from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./BookCarousel.css";

import SwiperNavButton from "./component/SwiperNavButton";
import BookCardVer from "../bookCard/BookCardVer";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Book } from "@/type/book";
type BreakpointConfig = {
  slidesPerView: number;
  spaceBetween?: number;
};

type SlidesPerViewConfig = {
  default: number;
  breakpoints?: {
    [key: number]: BreakpointConfig;
  };
};

interface BookProp {
  sliderBooks: Book[];
  containerClassName?: string;
  slidesPerViewConfig?: SlidesPerViewConfig;
  searchTitleResult: Book[];
  searchType: "tag" | "title" | null;
}
const BookCarousel = ({
  sliderBooks,
  searchTitleResult,
  searchType,
  containerClassName = "max-w-[1280px]",
  slidesPerViewConfig = {
    default: 4.5,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 5 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 4.5, spaceBetween: 15 },
      1280: { slidesPerView: 4.5, spaceBetween: 20 },
      1536: { slidesPerView: 4.5, spaceBetween: 20 },
    },
  },
}: BookProp) => {
  console.log("searchTitleResult", searchTitleResult);
  return (
    <div
      className={`w-[370px] h-[378px] sm:!min-w-full sm:h-[427px] relative text-center max-w-[995px] mx-auto bg-amber-400 flex justify-center items-center ${containerClassName}`}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className="mySwiper w-full h-full"
        slidesPerView={slidesPerViewConfig.default}
        breakpoints={slidesPerViewConfig.breakpoints}
      >
        {searchType === "tag"
          ? sliderBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <div className="w-[167px] h-[374px] sm:min-w-[197px] sm:max-w-[197px] sm:h-[417px] bg-red-500 flex justify-center items-center">
                  <BookCardVer
                    titleOfBook={book.title}
                    author={book.author}
                    image={book?.image}
                    discount={book?.discount}
                    price={book?.price}
                    rating={book?.rating}
                    reviewsComment={book?.reviewsComment}
                  />
                </div>
              </SwiperSlide>
            ))
          : searchTitleResult.map((book) => (
              <SwiperSlide key={book.id}>
                <div className="w-[167px] h-[374px] sm:min-w-[197px] sm:max-w-[197px] sm:h-[417px] bg-red-500 flex justify-center items-center">
                  <BookCardVer
                    titleOfBook={book.title}
                    author={book.author}
                    image={book?.image}
                    discount={book?.discount}
                    price={book?.price}
                    rating={book?.rating}
                    reviewsComment={book?.reviewsComment}
                  />
                </div>
              </SwiperSlide>
            ))}
        <SwiperNavButton />
      </Swiper>
    </div>
  );
};

export default BookCarousel;

// "use client";
// import React from "react";
// import { A11y, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "./BookCarousel.css";

// import SwiperNavButton from "./component/SwiperNavButton";
// import BookCardVer from "../bookCard/BookCardVer";

// import "swiper/css/pagination";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Book } from "@/type/book";
// type BreakpointConfig = {
//   slidesPerView: number;
//   spaceBetween?: number;
// };

// type SlidesPerViewConfig = {
//   default: number;
//   breakpoints?: {
//     [key: number]: BreakpointConfig;
//   };
// };

// interface BookProp {
//   sliderBooks: Book[];
//   containerClassName?: string;
//   slidesPerViewConfig?: SlidesPerViewConfig;
//   searchTitleResult: Book[];
//   searchType: "tag" | "title" | null;
// }
// const BookCarousel = ({
//   sliderBooks,
//   searchTitleResult,
//   searchType,
//   containerClassName = "max-w-[1280px]",
//   slidesPerViewConfig = {
//     default: 4.5,
//     breakpoints: {
//       0: { slidesPerView: 2, spaceBetween: 5 },
//       640: { slidesPerView: 2, spaceBetween: 15 },
//       768: { slidesPerView: 3, spaceBetween: 15 },
//       1024: { slidesPerView: 4.5, spaceBetween: 15 },
//       1280: { slidesPerView: 4.5, spaceBetween: 20 },
//       1536: { slidesPerView: 4.5, spaceBetween: 20 },
//     },
//   },
// }: BookProp) => {
//   console.log("searchTitleResult", searchTitleResult);
//   console.log("  searchType", searchType);
//   return (
//     <div
//       className={`w-[370px] h-[378px] sm:!min-w-full sm:h-[427px] relative text-center max-w-[995px] mx-auto bg-amber-400 flex justify-center items-center ${containerClassName}`}
//     >
//       <Swiper
//         modules={[Navigation, Pagination, A11y]}
//         className="mySwiper w-full h-full"
//         slidesPerView={slidesPerViewConfig.default}
//         breakpoints={slidesPerViewConfig.breakpoints}
//       >
//         {sliderBooks.map((book) => (
//           <SwiperSlide key={book.id}>
//             <div className="w-[167px] h-[374px] sm:min-w-[197px] sm:max-w-[197px] sm:h-[417px] bg-red-500 flex justify-center items-center">
//               <BookCardVer
//                 titleOfBook={book.title}
//                 author={book.author}
//                 image={book?.image}
//                 discount={book?.discount}
//                 price={book?.price}
//                 rating={book?.rating}
//                 reviewsComment={book?.reviewsComment}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//         <SwiperNavButton />
//       </Swiper>
//     </div>
//   );
// };

// export default BookCarousel;
