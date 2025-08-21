"use client";
import { books } from "@/data/books"; // مسیر فایل books رو درست وارد کن
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "cmdk";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  // فیلتر کردن کتاب‌ها بر اساس ورودی کاربر
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.subCategory?.toLowerCase().includes(query.toLowerCase()) ||
      book.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLocaleLowerCase()),
      ),
  );

  return (
    <Command className="w-full h-full px-[4px]border-[1.5px] border-[#c3c3c3] rounded-[8px]">
      <CommandInput
        className="w-full h-full text-[14px] pr-[6.5px] border-[1.5px] border-[#c3c3c3] rounded-[8px] focus:outline-none focus:ring-0"
        placeholder="جستجو در کنج "
        value={query}
        onValueChange={(value) => setQuery(value)}
      />
      <CommandList className="z-10 absolute">
        {filteredBooks.length === 0 && (
          <CommandEmpty>نتیجه‌ای پیدا نشد.</CommandEmpty>
        )}
        {filteredBooks.length > 0 && (
          <CommandGroup heading="کتاب‌ها">
            {filteredBooks.map((book) => (
              <CommandItem key={book.id}>
                <span>{book.title}</span> -{" "}
                <span className="text-gray-500">{book.author}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};

export default SearchBar;
