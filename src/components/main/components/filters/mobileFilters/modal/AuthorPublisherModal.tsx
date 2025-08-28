// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useEffect, useRef } from "react";

// import Button from "@/components/button/Button";
// import Checkbox from "@/components/checkBox/CheckBox";
// import SearchBarFilter from "../../desktopFilters/components/searchBar/SearchBarFilter";
// interface FilterOption {
//   id: number;
//   name: string;
// }
// interface FilterBoxProps {
//   title?: string;
//   options?: FilterOption[];
//   showAuthorModal?: boolean;
//   setShowAuthorModal?: (value: boolean) => void;
// }
// type SortingOptions = string[];
// const AuthorPublisherModal = ({
//   title,
//   options,
//   showAuthorModal,
//   setShowAuthorModal,
// }: FilterBoxProps) => {
//   const modalRef = useRef<HTMLDivElement | null>(null);
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node)
//       ) {
//         showAuthorModal(false);
//         console.log(
//           "event target",
//           modalRef?.current?.contains(event?.target as Node)
//         );
//         console.log("event target", event?.target as Node);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showAuthorModal]);
//   const sortingOptions: SortingOptions = [
//     "پر فروش ترین",
//     "جدید ترین",
//     "گران ترین",
//     "ارزان ترین",
//     "محبوب ترین",
//   ];
//   return (
//     <div className="sm:hidden max-w-[390px] min-w-[390px] min-h-screen !fixed !inset-0 flex justify-end items-end bg-[#F5F6F8]/90 z-50">
//       <div
//         className="!max-w-[390px] !h-[252px] rounded-[8px] p-[16px] gap-[16px] flex flex-col justify-between items-start bg-white"
//         ref={modalRef}
//       >
//         <div className="w-full flex flex-row justify-between items-center">
//           <div className="flex flex-row justify-between items-center gap-[10px]">
//             <div className="w-[24px] h-[24px] flex justify-center items-center pt-[8px]">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20.32 11.2132L13.32 4.21316C13.1271 4.0256 12.8487 3.9552 12.5898 4.0285C12.3309 4.10179 12.1308 4.30764 12.0648 4.5685C11.9989 4.82936 12.0771 5.1056 12.27 5.29316L17.98 10.9932H4.75C4.33579 10.9932 4 11.3289 4 11.7432C4 12.1574 4.33579 12.4932 4.75 12.4932H17.97L12.27 18.1932C12.1271 18.3324 12.0464 18.5236 12.0464 18.7232C12.0464 18.9227 12.1271 19.1139 12.27 19.2532C12.4078 19.3978 12.6002 19.4777 12.8 19.4732C12.9991 19.4741 13.1901 19.3948 13.33 19.2532L20.33 12.2532C20.6225 11.9603 20.6225 11.486 20.33 11.1932L20.32 11.2132Z"
//                   fill="black"
//                 />
//               </svg>
//             </div>
//             <p className="font-semibold text-[#444444]">
//               نویسنده، مترجم یا راوی
//             </p>
//           </div>
//           <Button className="!w-[104px] text-[#744D7E]" variant="Tertiary">
//             لغو فیلتر ها
//           </Button>
//         </div>
//         <div className="w-[358px] h-[36px] border-[1px] border-[#C3C3C3] rounded-[8px] bg-white text-center">
//           <SearchBarFilter />
//         </div>
//         <div className="w-full flex h-full flex-col gap-3">
//           {sortingOptions.map((option) => (
//             <label
//               key={option}
//               className="flex h-[20px] w-full flex-row items-center gap-2 text-[14px] text-[#444444]"
//             >
//               <Checkbox />
//               <span className="pb-[4px]">{option}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthorPublisherModal;
