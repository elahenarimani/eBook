
import React from 'react'
import {create} from "zustand"
import {persist} from "zustand/middleware"

import { Book } from '@/type/book';
interface BookStore{
    books:Book[]
}
export const useBookStore = create<BookStore>()(
  persist(
    (set,get) => ({
      books: [],
   
    }),
    { name: "book-storage" }
  )
);
