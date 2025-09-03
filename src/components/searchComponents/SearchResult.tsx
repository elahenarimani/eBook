// "use client";
// import React from "react";
// import { useSearchParams } from "next/navigation";

// import NoSearchResult from "./NoSearchResult";
// import CategorySliderr from "../main/categorySlider/CategorySliderr";

// import { books } from "@/data/books";
// import { Book } from "@/type/book";
// import FooterMobSize from "../footer/FooterMobSize";

// const SearchResult = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";

//   // const searchResults: Book[] = query
//   //   ? books.filter(
//   //       (book) =>
//   //         book.tags.some((tag) => tag.includes(query)) ||
//   //         book.title.includes(query)
//   //     )
//   //   : [];

//   function searchBooksAndTags() {
//     const searchResults: Book[] = [];
//     const matchedTags: string[] = [];
//     let searchType: "tag" | "title" | null = null;
//     books.forEach((book) => {
//       //search base on tag:
//       const foundTag = book.tags.find((tag) =>
//         query.split(" ").some((word) => tag.toLowerCase().includes(word))
//       );
//       //search base on title:
//       const foundTitle = query
//         .split(" ")
//         .some((word) => book.title.toLowerCase().includes(word.toLowerCase()));

//        if (foundTag && !matchedTags.includes(foundTag)) {
//       searchResults.push(book);
//       matchedTags.push(foundTag);
//       searchType = "tag";
//     } else if (foundTitle && !searchResults.includes(book)) {
//       searchResults.push(book);
//       if (book.publisher && !matchedTags.includes(book.publisher)) {
//         matchedTags.push(book.publisher);
//       }
//       searchType = "title";
//     }
//   });
//   //   });
//   //   return { searchResults, matchedTags };
//   // }

//   function matchesTag(query: string, tags: string[]): string | null {
//   const words = query.split(" ").map((w) => w.toLowerCase());
//   for (const tag of tags) {
//     if (words.some((word) => tag.toLowerCase().includes(word))) {
//       return tag;
//     }
//   }
//   return null;
//   function matchesTitle(query: string, title: string): boolean {
//   const words = query.split(" ").map((w) => w.toLowerCase());
//   return words.some((word) => title.toLowerCase().includes(word));
// }
// function searchBooks(query: string, books: Book[]) {
//   const searchResults: Book[] = [];
//   const matchedTags: string[] = [];
//   let searchType: "tag" | "title" | null = null;

//   for (const book of books) {
//     const foundTag = matchesTag(query, book.tags);
//     const foundTitle = matchesTitle(query, book.title);

//     if (foundTag && !matchedTags.includes(foundTag)) {
//       searchResults.push(book);
//       matchedTags.push(foundTag);
//       searchType = "tag";
//     } else if (foundTitle && !searchResults.includes(book)) {
//       searchResults.push(book);
//       if (book.publisher && !matchedTags.includes(book.publisher)) {
//         matchedTags.push(book.publisher);
//       }
//       searchType = "title";
//     }
//   }

//   return { searchResults, matchedTags, searchType };
// }
//   const { searchResults, matchedTags, searchType } = searchBooks(query, books);

//   //  function filterBooksBySelection() {
//   //     if (!selected) return { filteredBook: books, matchedTags: [] };

//   //     const selectedWord = selected.toLowerCase();
//   //     const filteredBook: Book[] = [];
//   //     const matchedTags: string[] = [];
//   //     books.forEach((book) => {
//   //       const foundTag = book.tags.find((tag) =>
//   //         selectedWord
//   //           .split(" ")
//   //           .some((word) => tag.toLowerCase().includes(word)),
//   //       );
//   //       if (foundTag && !matchedTags.includes(foundTag)) {
//   //         filteredBook.push(book);
//   //         matchedTags.push(foundTag);
//   //       }
//   //     });
//   //     return { filteredBook, matchedTags };
//   //   }
//   return (
//     <div className="w-full ">
//       {searchResults.length > 0 ? (
//         <>
//           <h1 className="text-[18px] sm:text-[36px] font-medium sm:font-extrabold pt-[40px] sm:pt-[50px] pb-[12px] sm:pb-[18px]">
//             نتایج جستجو به دنبال <span>{query}</span>
//             {searchType === "tag"}
//   {searchType === "title" }
//           </h1>
//           <CategorySliderr
//             searchResults={searchResults}
//             matchedTags={matchedTags}
//           />
//           <div className="!max-w-[390px] h-full !mx-auto sm:w-full sm:mx-0 sm:hidden">
//             <FooterMobSize />
//           </div>
//         </>
//       ) : (
//         <NoSearchResult />
//       )}
//     </div>
//   );
// };

// export default SearchResult;
"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import NoSearchResult from "./NoSearchResult";
import FooterMobSize from "../footer/FooterMobSize";
import CategorySliderr from "../main/categorySlider/CategorySliderr";

import { books } from "@/data/books";
import { Book } from "@/type/book";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  //تابع جدید
  function searchBooks() {
    const searchResults: Book[] = [];
    const matchedTags: string[] = [];
    const matchedPublisher: string[] = [];
    const searchTitleResult: Book[] = [];
    let searchType: "tag" | "title" | null = null;
    books.forEach((book) => {
      const foundTag = book.tags.find((tag) =>
        query.split(" ").some((word) => tag.toLowerCase().includes(word)),
      );
      if (foundTag && !matchedTags.includes(foundTag)) {
        searchResults.push(book);
        matchedTags.push(foundTag);
        searchType = "tag";
      }
    });
    // books.forEach((book) => {
    //   if (query.toLowerCase() === book.title.toLowerCase()) {
    //     query.split(" ").some((word) => book.title.includes(word));
    //     searchTitleResult.push(book);
    //     matchedPublisher.push(book.publisher);
    //     searchType = "title";
    //   }
    // });
    books.forEach((book) => {
      const foundTitle = query
        .split(" ")
        .some((word) => book.title.toLowerCase().includes(word.toLowerCase()));

      if (foundTitle) {
        searchTitleResult.push(book);
        if (book.publisher && !matchedPublisher.includes(book.publisher)) {
          matchedPublisher.push(book.publisher);
        }
        searchType = "title";
      }
    });
    return {
      searchResults,
      matchedTags,
      searchType,
      matchedPublisher,
      searchTitleResult,
    };
  }
  const {
    searchResults,
    matchedTags,
    searchType,
    matchedPublisher,
    searchTitleResult,
  } = searchBooks();
  useEffect(() => {
    // console.log("searchResults", searchResults);
    // console.log("matchedTags", matchedTags);
    // console.log("searchType", searchType);
    console.log("matchedPublisher", matchedPublisher);
    console.log("searchTitleResult", searchTitleResult);
  }, [
    // searchResults,
    // matchedTags,
    // searchType,
    matchedPublisher,
    searchTitleResult,
  ]);
  //تابع قدیمی
  //   function matchesTag(query: string, tags: string[]): string | null {
  //     const words = query.toLowerCase().split(" ");
  //     return (
  //       tags.find((tag) =>
  //         words.some((word) => tag.toLowerCase().includes(word))
  //       ) || null
  //     );
  //   }

  //   function matchesTitle(query: string, title: string): boolean {
  //     const words = query.split(" ").map((w) => w.toLowerCase());
  //     return words.some((word) => title.toLowerCase().includes(word));
  //   }
  //   function searchBooks(query: string, books: Book[]) {
  //     const searchResults: Book[] = [];
  //     const matchedItems: string[] = [];
  //     let searchType: "tag" | "title" | null = null;
  // return   const foundTag = matchesTag(query, book.tags);
  //       const foundTitle = matchesTitle(query, book.title);

  //     for (const book of books) {
  //       const foundTag = matchesTag(query, book.tags);
  //       const foundTitle = matchesTitle(query, book.title);

  //       if (foundTag && !matchedItems.includes(foundTag)) {
  //         searchResults.push(book);
  //         matchedItems.push(foundTag);
  //         searchType = "tag";
  //       } else if (foundTitle && !searchResults.includes(book)) {
  //         searchResults.push(book);
  //         if (book.publisher && !matchedItems.includes(book.publisher)) {
  //           matchedItems.push(book.publisher);
  //         }
  //         searchType = "title";
  //       }
  //     }

  //     return { searchResults, matchedItems, searchType, foundTag, foundTitle };
  //   }

  //   const { searchResults, matchedItems, searchType, foundTag, foundTitle } =
  //     searchBooks(query, books);

  return (
    <div className="w-full">
      {searchResults.length > 0 ||
      matchedPublisher.length > 0 ||
      searchTitleResult.length > 0 ? (
        <>
          <h1 className="text-[18px] sm:text-[36px] font-medium sm:font-extrabold pt-[40px] sm:pt-[50px] pb-[12px] sm:pb-[18px]">
            نتایج جستجو برای <span>{query}</span>
            {/* {searchType === "title" && <span>{query}</span>} */}
          </h1>
          <CategorySliderr
            searchResults={searchResults}
            matchedTags={matchedTags}
            searchType={searchType}
            matchedPublisher={matchedPublisher}
            searchTitleResult={searchTitleResult}
          />
          <div className="!max-w-[390px] h-full !mx-auto sm:w-full sm:mx-0 sm:hidden">
            <FooterMobSize />
          </div>
        </>
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchResult;
