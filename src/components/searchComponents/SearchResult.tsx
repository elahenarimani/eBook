"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import NoSearchResult from "./NoSearchResult";

import { books } from "@/data/books";
import { Book } from "@/type/book";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results: Book[] = query
    ? books.filter(
        (book) =>
          book.tags.some((tag) => tag.includes(query)) ||
          book.title.includes(query),
      )
    : [];
  return (
    <div className="w-full h-screen p-6">
      {results.length > 0 ? (
        <>
          <h1 className="text-xl font-bold mb-4">
            نتایج جستجو برای: <span className="text-primary">{query}</span>
          </h1>
          <ul className="space-y-2">
            {results.map((book) => (
              <li key={book.id} className="border p-2 rounded">
                <p className="font-semibold">{book.title}</p>
                <p className="text-sm text-gray-500">{book.author}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchResult;
