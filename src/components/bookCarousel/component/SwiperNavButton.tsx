import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="custom-button !w-full !h-[37] hidden sm:!flex flex-row justify-between items-center gap-[100px]">
      <button
        className="custom-prev-btn !w-[36px] !h-[36px] bg-white rounded-[100px] absolute top-1/2 -translate-y-1/2 z-1000000 left-[-18px] flex justify-center items-center cursor-pointer"
        onClick={() => swiper?.slidePrev()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#9D9D9D"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0001 20.75C15.801 20.7509 15.61 20.6716 15.4701 20.53L7.47007 12.53C7.17762 12.2372 7.17762 11.7628 7.47007 11.47L15.4701 3.47C15.7656 3.19464 16.2261 3.20277 16.5117 3.48838C16.7973 3.77399 16.8054 4.23449 16.5301 4.53L9.06007 12L16.5301 19.47C16.8225 19.7628 16.8225 20.2372 16.5301 20.53C16.3902 20.6716 16.1991 20.7509 16.0001 20.75Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        className="custom-next-btn !w-[36px] !h-[36px] bg-white rounded-[100px] absolute top-1/2 -translate-y-1/2 z-1000000 right-[-18px] flex justify-center items-center cursor-pointer"
        // ref={nextRef}
        onClick={() => swiper?.slideNext()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#9D9D9D"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00007 20.75C8.19914 20.7509 8.39019 20.6716 8.53007 20.53L16.5301 12.53C16.8225 12.2372 16.8225 11.7628 16.5301 11.47L8.53007 3.47C8.23456 3.19464 7.77406 3.20277 7.48845 3.48838C7.20284 3.77399 7.19471 4.23449 7.47007 4.53L14.9401 12L7.47007 19.47C7.17762 19.7628 7.17762 20.2372 7.47007 20.53C7.60996 20.6716 7.80101 20.7509 8.00007 20.75Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavButton;
