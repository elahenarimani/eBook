// export interface Book {
//   id: number;
//   title: string;
//   name: string;
//   author: string;
//   publisher: string;
//   image: string;
//   rating: number;
//   reviewsComment: number;
//   price: number;
//   discount?: number;
//   contentType: "کتاب متنی" | "کتاب صوتی" | "مجله";
//   categories: "کتاب متنی" | "داستان و رمان" | "داستان و رمان خارجی";
//   subCategory?: "روانشناسی" | "مدیریت و بازاریابی" | "داستان و رمان ایرانی";
//   subSubCategory?: "عاشقانه" | "فانتزی" | "درام";
//   extraCategories: string;
//   tags: string[];
// }
// export interface IconProps {
//   width?: number | string;
//   height?: number | string;
//   fill?: string;
// }

// نوع محتوای کتاب
//

// 1) داده‌ ثابت شامل دسته‌ها و زیر‌دسته‌ها
export const SubCategories = {
  "کتاب های متنی": [
    "داستان و رمان",
    "روانشناسی",
    "مدیریت و بازاریابی",
    "علوم اجنماعی",
    "ادبیات",
    "تاریخ",
    "هنر",
    "آموزشی",
    "زندگی‌نامه و سفرنامه",
    "ازدواج و خانواده",
    "فلسفه و عرفان",
  ],
  "داستان و رمان": ["داستان و رمان ایرانی", "داستان و رمان خارجی"],
  "داستان و رمان خارجی": [
    "درام",
    "فانتزی",
    "داستان کوتاه",
    "جنایی و پلیسی",
    "عاشقانه",
    "معمایی تاریخی",
    "طنز",
  ],
} as const;
export type ContentType = "کتاب متنی" | "کتاب صوتی" | "مجله";

export type MainCategory = keyof typeof SubCategories;
// MainCategory :"کتاب های متنی" | "داستان و رمان" | "داستان و رمان خارجی"

export type SubCategory = (typeof SubCategories)[MainCategory][number];
// SubCategory:"داستان و رمان" | "روانشناسی"| "مدیریت و بازاریابی"| "علوم اجنماعی" | "ادبیات"| "تاریخ" | "هنر"
// | "آموزشی" | "زندگی‌نامه و سفرنامه"| "ازدواج و خانواده" | "فلسفه و عرفان" | "داستان و رمان ایرانی" | "داستان و رمان خارجی" | "درام"
// | "فانتزی" | "داستان کوتاه"| "جنایی و پلیسی"| "عاشقانه" | "معمایی تاریخی" | "طنز"
export interface Book {
  id?: number;
  title: string;
  name?: string;
  author: string;
  authorEn: string;
  publisher?: string;
  image?: string;
  rating?: number;
  reviewsComment?: number;
  price?: number;
  discount?: number;
  tags: string[];
  contentType: ContentType;
  category?: MainCategory;
  subCategory?: SubCategory;
}
