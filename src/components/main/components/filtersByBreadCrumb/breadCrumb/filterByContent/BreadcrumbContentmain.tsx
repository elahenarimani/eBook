// import React from "react";
// import Link from "next/link";

// import BreadCRBResContentMain from "../../filterResult/BreadCRBResContentMain";

// import { books } from "@/data/books";
// const BreadcrumbContentmain = () => {
//   const allData: string[] = Array.from(
//     new Set(books.map((item) => item.contentType)),
//   );
//   console.log("allData", allData);
//   return (
//     <div className="BreadcrumbContent w-full h-full bg-[#F5F6F8]">
//       <nav className="w-[239px] h-full sm:w-[320px] sm:h-[16px] flex flex-row justify-start items-center gap-[6px] bg-[#F5F6F8] !my-[12px]">
//         <span className="h-full flex flex-row justify-stary items-center">
//           <Link
//             href={"/"}
//             className="w-full font-thin text-[12px] text-[#555555] sm:font-light sm:text-[12px] truncate pb-[4px]"
//           >
//             خانه
//           </Link>
//           <span className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]">
//             <svg
//               width="100%"
//               height="100%"
//               viewBox="0 0 12 12"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M7.99967 10.375C7.90014 10.3755 7.80461 10.3358 7.73467 10.265L3.73467 6.265C3.58844 6.11859 3.58844 5.88141 3.73467 5.735L7.73467 1.735C7.88242 1.59732 8.11267 1.60138 8.25548 1.74419C8.39829 1.88699 8.40235 2.11724 8.26467 2.265L4.52967 6L8.26467 9.735C8.4109 9.88141 8.4109 10.1186 8.26467 10.265C8.19473 10.3358 8.0992 10.3755 7.99967 10.375Z"
//                 fill="#555555"
//               />
//             </svg>
//           </span>
//         </span>
//         <span className="h-full flex flex-row justify-stary items-center">
//           <Link
//             href="/"
//             className="w-full font-thin text-[12px] text-[#555555] sm:font-light sm:text-[12px] truncate pb-[4px]"
//           >
//             کتاب متنی{" "}
//           </Link>
//           <span className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]">
//             <svg
//               width="100%"
//               height="100%"
//               viewBox="0 0 12 12"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M7.99967 10.375C7.90014 10.3755 7.80461 10.3358 7.73467 10.265L3.73467 6.265C3.58844 6.11859 3.58844 5.88141 3.73467 5.735L7.73467 1.735C7.88242 1.59732 8.11267 1.60138 8.25548 1.74419C8.39829 1.88699 8.40235 2.11724 8.26467 2.265L4.52967 6L8.26467 9.735C8.4109 9.88141 8.4109 10.1186 8.26467 10.265C8.19473 10.3358 8.0992 10.3755 7.99967 10.375Z"
//                 fill="#555555"
//               />
//             </svg>
//           </span>
//         </span>
//       </nav>
//       <div className="sm:hidden w-full h-full bg-[#F5F6F8]">
//         <BreadCRBResContentMain allData={allData} />
//       </div>
//     </div>
//   );
// };

// export default BreadcrumbContentmain;
