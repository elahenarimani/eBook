"use client";
import React, { useEffect, useState } from "react";

import AuthorPublisherFilter from "./AuthorPublisherFilter";
import ContentTypeFilter from "./ContentTypeFilter";
import FilterText from "./FilterText";

import CategorySliderMain from "@/components/main/categorySlider/CategorySliderMain";
import { books } from "@/data/books";
import { Book, ContentType, MainCategory } from "@/type/book";

const BookFilters = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<MainCategory[]>(
    [],
  );
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(
    [],
  );
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);
  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(book.category);

      const matchContentType =
        selectedContentTypes.length === 0 ||
        selectedContentTypes.includes(book.contentType);

      const matchAuthor =
        selectedAuthors.length === 0 || selectedAuthors.includes(book.author);

      const matchPublisher =
        selectedPublishers.length === 0 ||
        selectedPublishers.includes(book.publisher);
      return matchCategory && matchContentType && matchAuthor && matchPublisher;
    });

    setFilteredBooks(filtered);
  }, [
    selectedCategories,
    selectedContentTypes,
    selectedAuthors,
    selectedPublishers,
    books,
  ]);
  console.log("selectedAuthors", selectedAuthors);
  const allcategories: MainCategory[] = [
    ...new Set(books.map((book) => book.category)),
  ];
  const contentTypes: ContentType[] = [
    ...new Set(books.map((book) => book.contentType)),
  ];
  const authors: string[] = [...new Set(books.map((book) => book.author))];
  const publishers: string[] = [
    ...new Set(books.map((book) => book.publisher)),
  ];
  console.log("selectedCategories", selectedCategories);
  console.log("filteredBooks", filteredBooks);
  console.log("selectedPublishers", selectedPublishers);
  return (
    <div className="w-full flex flex-row justify-between items-start gap-[16px]">
      <div className="hidden sm:flex w-full h-full flex-col justify-start items-start gap-[16px]">
        <FilterText
          allcategories={allcategories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <ContentTypeFilter
          contentTypes={contentTypes}
          selectedContentTypes={selectedContentTypes}
          setSelectedContentTypes={setSelectedContentTypes}
        />
        <AuthorPublisherFilter
          title="نویسنده، مترجم یا راوی"
          // options={publisherData}
          authors={authors}
          publishers={publishers}
          selectedAuthors={selectedAuthors}
          setSelectedAuthors={setSelectedAuthors}
          selectedPublishers={selectedPublishers}
          setSelectedPublishers={setSelectedPublishers}
        />
        <AuthorPublisherFilter
          title="ناشر"
          // options={authorData}
          authors={authors}
          publishers={publishers}
          selectedAuthors={selectedAuthors}
          setSelectedAuthors={setSelectedAuthors}
          selectedPublishers={selectedPublishers}
          setSelectedPublishers={setSelectedPublishers}
        />
      </div>
      <div className="w-full h-full">
        <CategorySliderMain filteredBooks={filteredBooks} />
      </div>
    </div>
  );
};

export default BookFilters;
