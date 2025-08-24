import React from "react";
import Image from "next/image";
const ImageSection = () => {
  return (
    <div className="w-full h-[246px]">
      <div className="w-full h-full flex justify-center items-center bg-[#EBEBEB] py-[24px] px-[10px] sm:p-[36px] rounded-tl-[8px] rounded-tr-[8px]">
        <div className="w-[125px] h-[198px] sm:w-[125px] relative">
          <Image
            src="/images/18022baf12415b319ad7887d86e223147f7fdc14.png"
            fill
            style={{ objectFit: "cover" }}
            alt="image of book"
            className="rounded-[4px]"
          />
        </div>
      </div>
      <div className="w-[42px] h-[20px] sm:w-[53px] sm:h-[29px] bg-[#EC0B1A] rounded-bl-[4px] rounded-tl-[4px] absolute z-1 top-[15px] sm:top-[13px] right-0 flex justify-center items-center pt-[4px] border-[1px] border-[#EBEBEB]">
        <p className="text-white text-[14px] sm:font-bold sm:text-[20px]">
          30%
        </p>
      </div>
      <div className="w-[27px] h-[15px] sm:w-[58px] sm:h-[22px] absolute z-1 top-[225px] sm:top-[225px] left-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 27 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="-31" width="58" height="15" rx="7.5" fill="#787878" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7914 9.26V4.64286C17.7914 3.45939 16.832 2.5 15.6486 2.5H10.6429C9.45939 2.5 8.5 3.45939 8.5 4.64286V10.6657C8.5 11.6788 9.32124 12.5 10.3343 12.5H17.3629C17.5996 12.5 17.7914 12.3081 17.7914 12.0714C17.7914 11.8347 17.5996 11.6429 17.3629 11.6429H10.3343C9.79462 11.6429 9.35714 11.2054 9.35714 10.6657C9.35714 10.1261 9.79462 9.68857 10.3343 9.68857H17.3629C17.5996 9.68857 17.7914 9.49669 17.7914 9.26ZM9.35714 9.11714V4.64286C9.35714 3.93278 9.93278 3.35714 10.6429 3.35714H15.6486C16.3587 3.35714 16.9343 3.93278 16.9343 4.64286V8.83143H10.3343C9.98809 8.83225 9.64924 8.93133 9.35714 9.11714Z"
            fill="white"
          />
          <path
            d="M9.90571 10.6657C9.90571 10.429 10.0976 10.2371 10.3343 10.2371H16.66C16.8967 10.2371 17.0886 10.429 17.0886 10.6657C17.0886 10.9024 16.8967 11.0943 16.66 11.0943H10.3343C10.0976 11.0943 9.90571 10.9024 9.90571 10.6657Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageSection;
