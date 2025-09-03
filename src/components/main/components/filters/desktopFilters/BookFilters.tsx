"use client";
import React from "react";
import { useBookFilterStore } from "@/store/useBookFilterStore";

import AuthorPublisherFilter from "./AuthorPublisherFilter";
import ContentType from "./ContentType";
import FilterText from "./FilterText";
interface FilterType {
  name: string;
  id: number;
}
interface FilterProps {
  allCategories: string[];
  allContentTypes: string[];
  allAuthors: string[];
  allPublishers: string[];
}
const BookFilters = ({
  allCategories,
  allContentTypes,
  allAuthors,
  allPublishers,
}: FilterProps) => {
  const publisherData: FilterType[] = [
    { id: 1, name: "انتشارات 360 درجه" },
    { id: 2, name: "انتشارات جنگل" },
    { id: 3, name: "نشر چشمه" },
    { id: 4, name: "دنیای اقتصاد" },
    { id: 5, name: "انتشارات ایران" },
    { id: 6, name: "نشر افق" },
  ];
  const authorData: FilterType[] = [
    { id: 1, name: "Elif Shafak" },
    { id: 2, name: "Gabor Mate" },
    { id: 3, name: "Matt Haig" },
    { id: 4, name: "James Clear" },
    { id: 5, name: "Irvin D. Yalom" },
    { id: 6, name: "Darren Hardy" },
  ];
  const {
    selectedCategories,
    selectedContentTypes,
    selectedAuthors,
    selectedPublishers,
    setCategories,
    setContentTypes,
    setAuthors,
    setPublishers,
  } = useBookFilterStore();
  return (
    <div className="hidden sm:flex w-full h-full flex-col justify-start items-start gap-[16px]">
      <FilterText />
      <ContentType />
      <AuthorPublisherFilter
        title="نویسنده، مترجم یا راوی"
        options={publisherData}
      />
      <AuthorPublisherFilter title="ناشر" options={authorData} />
    </div>
  );
};

export default BookFilters;

//   <div className="flex flex-wrap gap-4 mb-6">
//       <div>
//         <h3>دسته بندی</h3>
//         {allCategories.map((cat) => (
//           <button
//             key={cat}
//             className={`px-2 py-1 border ${selectedCategories.includes(cat) ? "bg-blue-400 text-white" : ""}`}
//             onClick={() => toggle(selectedCategories, cat, setCategories)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div>
//         <h3>نوع محتوا</h3>
//         {allContentTypes.map((type) => (
//           <button
//             key={type}
//             className={`px-2 py-1 border ${selectedContentTypes.includes(type) ? "bg-blue-400 text-white" : ""}`}
//             onClick={() => toggle(selectedContentTypes, type, setContentTypes)}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       <div>
//         <h3>نویسنده</h3>
//         {allAuthors.map((auth) => (
//           <button
//             key={auth}
//             className={`px-2 py-1 border ${selectedAuthors.includes(auth) ? "bg-blue-400 text-white" : ""}`}
//             onClick={() => toggle(selectedAuthors, auth, setAuthors)}
//           >
//             {auth}
//           </button>
//         ))}
//       </div>

//       <div>
//         <h3>ناشر</h3>
//         {allPublishers.map((pub) => (
//           <button
//             key={pub}
//             className={`px-2 py-1 border ${selectedPublishers.includes(pub) ? "bg-blue-400 text-white" : ""}`}
//             onClick={() => toggle(selectedPublishers, pub, setPublishers)}
//           >
//             {pub}
//           </button>
//         ))}
//       </div>
//     </div>
