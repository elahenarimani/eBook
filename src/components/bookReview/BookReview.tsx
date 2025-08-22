import React, { useState } from "react";
const BookReview = () => {
  const [reviewText, setReviewText] = useState("");
  const [error, setError] = useState(false);
  const isDisabled: boolean = true;
  const minLength = 5;
  const maxLength = 500;
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    setReviewText(text);
    if (text.length < minLength || text.length > maxLength) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className="w-[372px] h-[193px] flex flex-col justify-between items-start gap-[8px]">
      <label htmlFor="book-review" className="block">
        توضیحات
      </label>
      <div
        className={`w-full h-[165px] px-[16px] py-[8px] border-[1px] ${error ? "border-[#EC0B1A] ring-1 ring-[#EC0B1A]" : "border-[#D7D7D7] focus-within:border-[#8B6099] focus-within:border-[1px] focus-within:ring-4 focus-within:ring-[#EADFEF]"}
         rounded-[12px] flex flex-col justify-between items-start ${isDisabled ? "bg-[#D7D7D7]" : "bg-white"}
       `}
      >
        <textarea
          id="book-review"
          value={reviewText}
          onChange={handleChange}
          className={`w-full h-full text-black text-[16px] outline-none resize-none ${isDisabled ? "text-[#989898]" : "placeholder-gray-300"}`}
          placeholder="توضیحات مربوطه را وارد کنید"
          maxLength={maxLength}
          minLength={minLength}
          disabled={isDisabled}
        />
        <p className="w-full h-[16px] text-gray-300 text-left text-[12px]">
          0/500
        </p>
      </div>
    </div>
  );
};

export default BookReview;
