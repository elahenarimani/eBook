export interface Book {
  id: number;
  title: string;
  name: string;
  author: string;
  publisher: string;
  image: string;
  rating: number;
  reviewsComment: number;
  price: number;
  discount?: number;
  extraCategories: string;
  contentType: string;
  categories: string[];
  subCategory?: string;
  subSubCategory?: string;
  tags: string[];
}
export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}
