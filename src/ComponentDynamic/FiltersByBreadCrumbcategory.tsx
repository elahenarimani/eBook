import React from "react";

import BreadcrumbCategory from "./breadCrumb/BreadcrumbCategory";

interface FiltersProp {
  slug: string | string[];
}

const FiltersByBreadCrumbcategory = ({ slug }: FiltersProp) => {
  const normalizedSlug = Array.isArray(slug) ? slug.join("-") : slug;
  const safeSlug = decodeURIComponent(normalizedSlug);
  return (
    <div className="filter-base-bread-crumb max-w-[390px] h-full pt-[12px] pb-[16px] sm:!w-full sm:!min-w-full bg-[#F5F6F8]">
      <BreadcrumbCategory slug={safeSlug} />
    </div>
  );
};

export default FiltersByBreadCrumbcategory;
