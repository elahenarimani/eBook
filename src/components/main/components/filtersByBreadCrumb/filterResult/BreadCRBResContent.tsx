// "use client";
// import React, { useEffect, useState } from "react";

// import CategorySlider from "./CategorySlider";

// import Button from "@/components/button/Button";
// import { books } from "@/data/books";
// import { Book } from "@/type/book";
// interface BreadResProp {
//   allData: string[];
//   sliderTitel: string;
// }

// const BreadCRBResContent = ({ allData, sliderTitel }: BreadResProp) => {
//   const [selected, setSelected] = useState<string | null>(null);
//   function filterBooksBySelection() {
//     if (!selected) return { filteredBook: books, matchedTags: [] };

//     const selectedWord = selected.toLowerCase();
//     const filteredBook: Book[] = [];
//     const matchedTags: string[] = [];
//     books.forEach((book) => {
//       const foundTag = book.tags.find((tag) =>
//         selectedWord
//           .split(" ")
//           .some((word) => tag.toLowerCase().includes(word)),
//       );
//       if (foundTag && !matchedTags.includes(foundTag)) {
//         filteredBook.push(book);
//         matchedTags.push(foundTag);
//       }
//     });
//     return { filteredBook, matchedTags };
//   }
//   const { filteredBook, matchedTags } = filterBooksBySelection();
//   useEffect(() => {
//     console.log("selected", selected);
//   }, []);
//   return (
//     <div className="bread-crumb-result w-[350px] h-full sm:w-[995px] bg-[#F5F6F8]">
//       <div className="h-full text-[14px] flex flex-wrap gap-[4px] bg-[#F5F6F8]">
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
//       {selected && (
//         <CategorySlider
//           filteredBook={filteredBook}
//           matchedTags={matchedTags}
//           sliderTitel={sliderTitel}
//         />
//       )}
//     </div>
//   );
// };

// export default BreadCRBResContent;
