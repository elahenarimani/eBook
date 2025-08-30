import React from "react";

import BookCarousel from "@/components/bookCarousel/BookCarousel";

interface CategorySlider {
  slug: string[] | string;
}
const CategorySlider = ({ slug }: CategorySlider) => {
  // function cleanSlug(slug: string): string {
  //   return slug
  //     .trim()
  //     .replace(/\s+/g, "-")
  //     .replace(/[^\u0600-\u06FFa-zA-Z0-9\-]/g, "");
  // }
  const normalizedSlug = Array.isArray(slug) ? slug.join("-") : slug;
  const safeSlug = decodeURIComponent(normalizedSlug);
  return (
    <div className="!max-w-[350px] flex flex-col justify-between items-center gap-[12px]">
      <p className="h-full text-[14px] truncate">{safeSlug}</p>
      <BookCarousel />
    </div>
  );
};

export default CategorySlider;
