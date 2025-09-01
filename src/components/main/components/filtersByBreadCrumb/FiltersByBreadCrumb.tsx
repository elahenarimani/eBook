import React from "react";

import BreadcrumbContent from "./breadCrumb/filterByContent/BreadcrumbContent";

interface FiltersProp {
  slug: string | string[];
}

const FiltersByBreadCrumb = ({ slug }: FiltersProp) => {
  const normalizedSlug = Array.isArray(slug) ? slug.join("-") : slug;
  const safeSlug = decodeURIComponent(normalizedSlug);
  return (
    <div className="filter-base-bread-crumb max-w-[390px] h-full pt-[12px] pb-[16px] sm:!w-full sm:!min-w-full bg-[#F5F6F8]">
      <BreadcrumbContent slug={safeSlug} />
      {/* <CategorySlider slug={safeSlug} /> */}
    </div>
  );
};

export default FiltersByBreadCrumb;
