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
interface BookProp {
  sliderBooks: Book[];
}
const BookCarousel = ({ sliderBooks }: BookProp) => {
  return (
    <div className="w-[370px] h-[378px] sm:!min-w-full sm:h-[427px] relative text-center max-w-[995px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className="mySwiper w-full h-full"
        slidesPerView={4.5}
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 2,
            allowTouchMove: true,
            navigation: true,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            allowTouchMove: true,
            navigation: true,
            spaceBetween: 15, // sm
          },
          768: {
            slidesPerView: 3, // md
            allowTouchMove: true,
            navigation: true,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4.5,
            allowTouchMove: true,
            navigation: true,
            spaceBetween: 15, // lg
          },
          1280: {
            slidesPerView: 4.5,
            allowTouchMove: true,
            navigation: true,
            spaceBetween: 15, // xl
          },
          1536: {
            slidesPerView: 4.5,
            allowTouchMove: true,
            navigation: true,
            spaceBetween: 15, // 2xl
          },
        }}
      >
        {sliderBooks.map((book) => (
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
