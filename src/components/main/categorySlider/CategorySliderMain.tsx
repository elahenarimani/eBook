import React from "react";

import { Book } from "@/type/book";
interface CategoryProp {
  filteredBooks: Book[];
}
const CategorySliderMain = ({ filteredBooks }: CategoryProp) => {
  return (
    <div className="mt-4 w-full">
      <h3 className="font-bold">📚 کتاب‌های فیلترشده:</h3>
      <ul className="list-disc pl-5">
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySliderMain;
