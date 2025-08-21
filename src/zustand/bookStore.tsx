import { Book } from "@/type/book";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface BookStore {
  books: Book[];
}
export const useBookStore = create<BookStore>()(
  persist(
    (set, get) => ({
      books: [],
    }),
    { name: "book-storage" },
  ),
);
