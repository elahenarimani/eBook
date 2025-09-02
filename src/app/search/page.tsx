import React from "react";

import SearchResult from "@/components/searchComponents/SearchResult";

const SearchPage = () => {
  return (
    <div className="w-full h-full">
      <div className="h-full !max-w-[390px] sm:!max-w-[1280px] mx-auto !px-[20px] xl:px-[80px]">
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchPage;
