export interface Book {
  id: number;
  title: string;
  name: string;
  author: string;
  image: string;
  rating: number;
  price: number;
  discount?: number;
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
