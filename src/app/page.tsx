// "use client";
// import Button from "@/components/button/Button";

import FooterDes from "../components/footer/FooterDes";

// import BookCardVer from "@/components/bookCard/BookCardVer";
// import FilterText from "../components/main/components/sidbarFilters/FilterText";
// import FilterTextBooks from "@/components/main/components/sidbarFilters/Filter";
// import BookCardVer from "@/components/bookCard/BookCardVer";
// import BookCarousel from "@/components/bookCarousel/BookCarousel";
import FooterMobSize from "@/components/footer/FooterMobSize";
import Breadcrumb from "@/components/main/components/breadcrumb/Breadcrumb";
import AuthorPublisherFilter from "@/components/main/components/filters/desktopFilters/AuthorPublisherFilter";
import ContentType from "@/components/main/components/filters/desktopFilters/ContentType";
import FilterText from "@/components/main/components/filters/desktopFilters/FilterText";
import FiltersByBreadCrumbMain from "@/components/main/components/filtersByBreadCrumb/FiltersByBreadCrumbMain";
// import Breadcrumb from "@/components/main/components/breadcrumb/Breadcrumb";
// import FilterMob from "@/components/main/components/filters/mobileFilters/FilterMob";
// import ProductSorting from "@/components/main/components/modalFilterMob/ProductSorting";
// import Breadcrumb from "@/components/main/components/breadcrumb/Breadcrumb";
// import ModalSorting from "@/components/main/components/filters/mobileFilters/ModalSorting";
// import FilterTextBooks from "@/components/main/components/filters/desktopFilters/components/filterText/FilterTextBooks";
// import FilterText from "@/components/main/components/filters/desktopFilters/FilterText";
// import AuthorPublisherFilter from "@/components/main/components/filters/desktopFilters/AuthorPublisherFilter";
// import AuthorPublisherModal from "@/components/main/components/filters/mobileFilters/modal/AuthorPublisherModal";
// import ContentType from "@/components/main/components/sidbarFilters/ContentType";

// import CheckBoxButton, { Checkbox } from "../components/checkBox/CheckBox";

// import BookReview from "@/components/bookReview/BookReview";
// import CheckBox from "@/components/checkBox/CheckBox";

// import PrimaryBtn from "../components/button/PrimaryBtn";
// interface FilterType {
//   name: string;
//   id: number;
// }
export default function Home() {
  // const publisherData: FilterType[] = [
  //   { id: 1, name: "انتشارات 360 درجه" },
  //   { id: 2, name: "انتشارات جنگل" },
  //   { id: 3, name: "نشر چشمه" },
  //   { id: 4, name: "دنیای اقتصاد" },
  //   { id: 5, name: "انتشارات ایران" },
  //   { id: 6, name: "نشر افق" },
  // ];
  // const authorData: FilterType[] = [
  //   { id: 1, name: "Elif Shafak" },
  //   { id: 2, name: "Gabor Mate" },
  //   { id: 3, name: "Matt Haig" },
  //   { id: 4, name: "James Clear" },
  //   { id: 5, name: "Irvin D. Yalom" },
  //   { id: 6, name: "Darren Hardy" },
  // ];
  return (
    <div className="w-full h-full">
      <main className="h-full !max-w-[390px] sm:!max-w-[1280px] mx-auto !px-[20px] xl:px-[80px] overflow-x-hidden sm:flex sm:flex-col sm:justify-between sm:items-start">
        <div className="hidden sm:block py-[24px]">
          <Breadcrumb />
        </div>
        <div className="hidden sm:flex w-full h-full flex-col justify-start items-start">
          <FilterText />
          <ContentType />
          <AuthorPublisherFilter title={""} options={[]} />
        </div>
        <div className="block sm:hidden">
          <FiltersByBreadCrumbMain />
        </div>
      </main>
      <footer className="block w-full h-full">
        <FooterDes />
        <div className="!max-w-[390px] !mx-auto sm:w-full sm:mx-0 sm:hidden">
          <FooterMobSize />
        </div>
      </footer>
    </div>
  );
}
