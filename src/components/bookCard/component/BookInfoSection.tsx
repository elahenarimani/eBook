import { Book } from "@/type/book";
import React from "react";
interface BookProp {
  matchedTags: string[];
  filteredBook: Book[];
}
const BookInfoSection = ({ matchedTags, filteredBook }: BookProp) => {
  console.log(matchedTags, filteredBook);
  return (
    <div className="rounded-bl-[8px] rounded-br-[8px] w-full h-full flex flex-col justify-between items-start gap-[12px] p-[12px]">
      <div className="flex flex-col justify-between items-start gap-[4px]">
        <p className="text-[14px] sm:text-[16px]">title</p>
        <p className="text-[#8A8A8A] text-[12px] font-light">autor</p>
        <div className="w-full h-[16px] flex flex-row justify-start items-center gap-[4px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9791 7.43547L12.165 9.83277L13.0224 13.4179C13.0697 13.6125 13.0575 13.8166 12.9874 14.0044C12.9172 14.1922 12.7923 14.3553 12.6284 14.473C12.4644 14.5907 12.2688 14.6578 12.0662 14.6659C11.8637 14.6739 11.6632 14.6225 11.4902 14.5181L8.33216 12.5993L5.17219 14.5181C4.99924 14.6219 4.79904 14.6728 4.59682 14.6645C4.3946 14.6562 4.19939 14.5889 4.03578 14.4713C3.87217 14.3537 3.74748 14.1909 3.67739 14.0035C3.60731 13.816 3.59497 13.6123 3.64193 13.4179L4.50243 9.83277L1.68829 7.43547C1.53527 7.3049 1.42459 7.13272 1.3701 6.94042C1.3156 6.74812 1.3197 6.54424 1.38187 6.35423C1.44405 6.16422 1.56155 5.9965 1.7197 5.87203C1.87786 5.74755 2.06965 5.67183 2.27113 5.65432L5.96078 5.36045L7.38411 1.9599C7.46115 1.77457 7.59227 1.61605 7.76081 1.50448C7.92934 1.39291 8.12768 1.33334 8.33059 1.33334C8.53351 1.33334 8.73184 1.39291 8.90038 1.50448C9.06892 1.61605 9.20004 1.77457 9.27708 1.9599L10.6998 5.36045L14.3894 5.65432C14.5913 5.67118 14.7837 5.74647 14.9424 5.87078C15.1011 5.99508 15.2192 6.16287 15.2817 6.35311C15.3443 6.54335 15.3486 6.74759 15.2941 6.94024C15.2396 7.13288 15.1287 7.30537 14.9754 7.43609L14.9791 7.43547Z"
              fill="#E1BD09"
            />
          </svg>
          <p className="w-[18px] h-[16px] text-[12px] pt-[2px]">3.4</p>
          <p className="w-[21px] h-[16px] text-[#B0B0B0] text-[12px] pt-[2px]">
            (102)
          </p>
        </div>
      </div>
      <div className="w-full !h-[2px] border-b-[#D7D7D7] border-b-[1px]"></div>
      <div className="w-full flex flex-row justify-between items-center text-[12px] gap-[8px] sm:text-[14px]">
        <p className="product-discount line-through text-[#9D9D9D]">116,000</p>
        <p className="product-price w-full flex-row justify-between items-center gap-[4px]">
          116,000{" "}
          <span className="currency text-[#8A8A8A] sm:hidden">تومان</span>
        </p>
      </div>
    </div>
  );
};

export default BookInfoSection;
