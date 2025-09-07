"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import AuthorPublisherFilter from "./AuthorPublisherFilter";
import ContentTypeFilter from "./ContentTypeFilter";
import FilterText from "./FilterText";

import CategorySliderMain from "@/components/main/categorySlider/CategorySliderMain";
import { books } from "@/data/books";
import { Book, ContentType, MainCategory } from "@/type/book";

const BookFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<MainCategory[]>(
    [],
  );
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(
    [],
  );
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);
  //get from URL query parameter
  useEffect(() => {
    setSelectedCategories(
      (searchParams.get("categories")?.split(",") as MainCategory[]) || [],
    );
    setSelectedContentTypes(searchParams.get("contentTypes")?.split(",") || []);
    setSelectedAuthors(searchParams.get("authors")?.split(",") || []);
    setSelectedPublishers(searchParams.get("publishers")?.split(",") || []);
  }, [searchParams]);
  //create URL query parameter

  useEffect(() => {
    // ✅ debounce timer
    const timer = setTimeout(() => {
      const params = new URLSearchParams();

      if (selectedCategories.length)
        params.set("categories", selectedCategories.join(","));
      if (selectedContentTypes.length)
        params.set("contentTypes", selectedContentTypes.join(","));
      if (selectedAuthors.length)
        params.set("authors", selectedAuthors.join(","));
      if (selectedPublishers.length)
        params.set("publishers", selectedPublishers.join(","));

      router.replace(`?${params.toString()}`);

      const filtered = books.filter(
        (book) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(book.category)) &&
          (selectedContentTypes.length === 0 ||
            selectedContentTypes.includes(book.contentType)) &&
          (selectedAuthors.length === 0 ||
            selectedAuthors.includes(book.author)) &&
          (selectedPublishers.length === 0 ||
            selectedPublishers.includes(book.publisher)),
      );
      setFilteredBooks(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [
    selectedCategories,
    selectedContentTypes,
    selectedAuthors,
    selectedPublishers,
  ]);
  // useEffect(() => {
  //   const filtered = books.filter((book) => {
  //     const matchCategory =
  //       selectedCategories.length === 0 ||
  //       selectedCategories.includes(book.category);

  //     const matchContentType =
  //       selectedContentTypes.length === 0 ||
  //       selectedContentTypes.includes(book.contentType);

  //     const matchAuthor =
  //       selectedAuthors.length === 0 || selectedAuthors.includes(book.author);

  //     const matchPublisher =
  //       selectedPublishers.length === 0 ||
  //       selectedPublishers.includes(book.publisher);
  //     return matchCategory && matchContentType && matchAuthor && matchPublisher;
  //   });

  //   setFilteredBooks(filtered);
  // }, [
  //   selectedCategories,
  //   selectedContentTypes,
  //   selectedAuthors,
  //   selectedPublishers,
  // ]);

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
