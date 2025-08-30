"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const contentTypeMap: Record<string, string> = {
  "کتاب-متنی": "کتاب متنی",
  "کتاب-صوتی": "کتاب صوتی",
  مجله: "مجله",
};

const categoryMap: Record<string, string> = {
  "کتاب-های-متنی": "کتاب های متنی",
  "داستان-و-رمان": "داستان و رمان",
  "داستان-و-رمان-خارجی": "داستان و رمان خارجی",
};

const subCategoryMap: Record<string, string> = {
  فانتزی: "فانتزی",
  عاشقانه: "عاشقانه",
  درام: "درام",
  "داستان-کوتاه": "داستان کوتاه",
  "جنایی-و-پلیسی": "جنایی و پلیسی",
  "معمایی-تاریخی": "معمایی تاریخی",
  طنز: "طنز",
  "داستان-و-رمان-ایرانی": "داستان و رمان ایرانی",
  // 🔹 بقیه زیردسته‌ها رو هم اینجا اضافه کن
};
interface ItemProp {
  label: string;
  path: string;
}
// interface BreadcrumbProps {
//   books: Book[];
// }
const Breadcrumb = () => {
  const params = useParams<{
    contentType?: string;
    category?: string;
    subCategory?: string;
  }>();
  const itemsOption: ItemProp[] = [
    { label: "خانه", path: "/" },
    { label: "کتاب ها", path: "/books" },
    // { label: contentType , path: "/books/contentType" },
    // { label: "category", path: "/books/contentType/category" },
    // { label: "subCategory", path: "/books/contentType/category/subCategory" },
  ];
  if (params.contentType) {
    itemsOption.push({
      // label: books[params.contentType] || params.contentType,
      label: contentTypeMap[params.contentType] || params.contentType,
      path: `/books/${params.contentType}`,
    });
  }
  if (params.category) {
    itemsOption.push({
      label: categoryMap[params.category] || params.category,
      path: `/books/${params.contentType}/${params.category}`,
    });
  }
  if (params.subCategory) {
    itemsOption.push({
      label: subCategoryMap[params.subCategory] || params.subCategory,
      path: `/books/${params.contentType}/${params.category}/${params.subCategory}`,
    });
  }
  return (
    <nav className="w-[239] h-[12px] sm:w-[320px] sm:h-[16px] flex flex-row justify-start items-center gap-[6px] bg-white border-l-[3px] border-l-white">
      {itemsOption.map((item, index) => (
        <span key={index} className="flex flex-row justify-stary items-center">
          <Link
            href={item.path}
            className="w-full py-[2px] font-thin text-[8px] text-[#555555] sm:font-light sm:text-[12px] truncate"
          >
            {item.label}
          </Link>
          <span className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 10.375C7.90014 10.3755 7.80461 10.3358 7.73467 10.265L3.73467 6.265C3.58844 6.11859 3.58844 5.88141 3.73467 5.735L7.73467 1.735C7.88242 1.59732 8.11267 1.60138 8.25548 1.74419C8.39829 1.88699 8.40235 2.11724 8.26467 2.265L4.52967 6L8.26467 9.735C8.4109 9.88141 8.4109 10.1186 8.26467 10.265C8.19473 10.3358 8.0992 10.3755 7.99967 10.375Z"
                fill="#555555"
              />
            </svg>
          </span>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
