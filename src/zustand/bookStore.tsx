import { create } from "zustand";
import { Book } from "@/type/book";
interface BookFilterState {
  selectedCategories: string[];
  selectedContentTypes: string[];
  selectedAuthors: string[];
  selectedPublishers: string[];
  setCategories: (categories: string[]) => void;
  setContentTypes: (types: string[]) => void;
  setAuthors: (authors: string[]) => void;
  setPublishers: (publishers: string[]) => void;
}
// export const useBookStore = create<BookStore>()(
//   persist(
//     (set, get) => ({
//       books: [],
//     }),
//     { name: "book-storage" },
//   ),
// );

export const useBookFilterStore = create<BookFilterState>((set) => ({
  selectedCategories: [],
  selectedContentTypes: [],
  selectedAuthors: [],
  selectedPublishers: [],
  setCategories: (categories) => set({ selectedCategories: categories }),
  setContentTypes: (types) => set({ selectedContentTypes: types }),
  setAuthors: (authors) => set({ selectedAuthors: authors }),
  setPublishers: (publishers) => set({ selectedPublishers: publishers }),
}));
