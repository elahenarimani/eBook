// "use client";
// import React, { useState } from "react";

// import CategorySlider from "./CategorySlider";

// import Button from "@/components/button/Button";
// import { books } from "@/data/books";
// import { Book } from "@/type/book";
// import { Tags } from "lucide-react";
// interface BreadResProp {
//   allData: string[];
// }

// const BreadCRBResContent = ({ allData }: BreadResProp) => {
//   const [selected, setSelected] = useState<string | null>(null);
//   // function filterBooksBySelection(
//   //   books: Book[],
//   //   selected: string | null,
//   // ): Book[] {
//   //   if (!selected) return books;

//   //   const query = selected.toLowerCase();

//   //   return books.filter((book) => {
//   //     const inTags = book.tags.some((tag) => tag.toLowerCase().includes(query));
//   //     const inContentType = book.contentType.toLowerCase().includes(query);
//   //     const inCategory = book.category
//   //       ? book.category.toLowerCase().includes(query)
//   //       : false;
//   //     const inSubCategory = book.subCategory
//   //       ? book.subCategory.toLowerCase().includes(query)
//   //       : false;

//   //     return inTags || inContentType || inCategory || inSubCategory;
//   //   });
//   // }

//   function getMatchedField(

//     selected: string
//   ): "tags" | "contentType" | "category" | "subCategory" | null {
//     const query = selected.toLowerCase();
//      books.map(book => (
//        if(book.tags.some((tag) =>tag.toLocaleLowerCase().includes(query))){
//            return "tags"
//        }else if(book.contentType.toLowerCase().includes(query)){
//           return "contentType";
//        }else if (book.contentType.toLowerCase().includes(query)) {
//           return "contentType";
//        }else  if (book.category && book.category.toLowerCase().includes(query)) {
//           return "category";
//        }else if (book.subCategory && book.subCategory.toLowerCase().includes(query)) {
//           return "subCategory";
//        }
//     return null
//     ));
//   }
//     // چک کردن tags
//     // if (book.tags.some((tag) => tag.toLowerCase().includes(query))) {
//     //   return "tags";
//     // }

//     // contentType
//     // if (book.contentType.toLowerCase().includes(query)) {
//     //   return "contentType";
//     // }

//     // category
//     // if (book.category && book.category.toLowerCase().includes(query)) {
//     //   return "category";
//     // }

//     // subCategory
//     // if (book.subCategory && book.subCategory.toLowerCase().includes(query)) {
//     //   return "subCategory";
//     // }

//      // هیچ کدوم مچ نشدن
//     //  return null;
//   return (
//     <div className="bread-crumb-result w-[350px] h-full">
//       <div className="h-[60px] text-[14px] flex flex-wrap gap-x-[4px]">
//         {allData.map((type) => (
//           <Button
//             variant="publicButton"
//             onClickHandler={() => setSelected(type)}
//             key={type}
//             className={`h-[28px] px-[12px] rounded-[24px] border-[1px] border-[#C3C3C3] flex justify-center items-center cursor-pointer focus:border-[#744D7E] ${selected === type ? "text-[#744D7E]" : "text-[#787878]"}`}
//           >
//             {type}
//           </Button>
//         ))}
//       </div>
//       {selected && <CategorySlider books={getMatchedField(book: Book, selected: string)} />},
//     </div>
//   );
// };

// export default BreadCRBResContent;

"use client";
import React, { useEffect, useState } from "react";

import CategorySlider from "./CategorySlider";

import Button from "@/components/button/Button";
import { books } from "@/data/books";
import { Book } from "@/type/book";
interface BreadResProp {
  allData: string[];
}

const BreadCRBResContent = ({ allData }: BreadResProp) => {
  const [selected, setSelected] = useState<string | null>(null);
  function filterBooksBySelection(books: Book[], selected: string) {
    if (!selected) return books;

    const query = selected.toLowerCase();
    console.log(query);
    return books.filter((book) => {
      const inTags = query
        .split(" ")
        .some((word) =>
          book.tags.some((tag) => tag.toLowerCase().includes(word)),
        );
      console.log("inTags", inTags);
      // const inContentType = book.contentType.toLowerCase().includes(query);
      // console.log("inContentType", inContentType);
      // const inCategory = book?.category?.toLowerCase().includes(query);
      // console.log("inCategory" ,inCategory);
      // const inSubCategory = book?.subCategory?.toLowerCase().includes(query);
      // console.log("inSubCategory",inSubCategory);
      // return inTags || inContentType || inCategory || inSubCategory;
      return inTags;
    });
  }
  // function test() {
  //   if (!selected) return;
  //    const query = selected.toLowerCase();
  //   const filteredBooks = filterBooksBySelection(books, selected);
  //   filteredBooks?.map(item => item.tags.includes(query).valueOf.)
  // }
  useEffect(() => {
    console.log("selected", selected);
  }, []);
  return (
    <div className="bread-crumb-result w-[350px] h-full">
      <div className="h-[60px] text-[14px] flex flex-wrap gap-x-[4px]">
        {allData.map((type) => (
          <Button
            variant="publicButton"
            onClickHandler={() => setSelected(type)}
            key={type}
            className={`h-[28px] px-[12px] rounded-[24px] border-[1px] border-[#C3C3C3] flex justify-center items-center cursor-pointer focus:border-[#744D7E] ${selected === type ? "text-[#744D7E]" : "text-[#787878]"}`}
          >
            {type}
          </Button>
        ))}
      </div>
      {selected && (
        <CategorySlider
          filteredBook={filterBooksBySelection(books, selected)}
          selected={selected}
        />
      )}
    </div>
  );
};

export default BreadCRBResContent;
