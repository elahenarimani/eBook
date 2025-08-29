import React from "react";

import type { ContentType } from "@/types/books";
interface Props {
  params: { contentType: ContentType };
}

const page = ({ params }: Props) => {
  const allContentTypes: ContentType[] = ["کتاب متنی", "کتاب صوتی", "مجله"];
  console.log(params.contentType);
  return (
    <div className="w-[350px] h-[60px] mx-[20px]">
      <ul className="h-ful text-[#787878] text-[14px] flex flex-wrap gap-x-[4px]">
        {allContentTypes.map((type) => (
          <li
            key={type}
            className="h-[28px] px-[12px] rounded-[24px] border-[1px] border-[#C3C3C3] flex justify-center items-center cursor-pointer"
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
