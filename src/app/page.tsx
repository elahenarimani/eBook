// "use client";
// import Button from "@/components/button/Button";
import FooterDes from "../components/footer/FooterDes";
// import FilterTextBooks from "@/components/main/components/sidbarFilters/Filter";
import Filter from "../components/main/components/sidbarFilters/Filter";

// import BookCardVer from "@/components/bookCard/BookCardVer";
import BookCarousel from "@/components/bookCarousel/BookCarousel";
import FooterMobSize from "@/components/footer/FooterMobSize";
import ContentType from "@/components/main/components/sidbarFilters/ContentType";

// import CheckBoxButton, { Checkbox } from "../components/checkBox/CheckBox";

// import BookReview from "@/components/bookReview/BookReview";
// import CheckBox from "@/components/checkBox/CheckBox";

// import PrimaryBtn from "../components/button/PrimaryBtn";

export default function Home() {
  return (
    <div>
      <main>
        {/* <Button
          variant={"Primary"}
          onClickHandler={() => {
            3 + 2;
          }}
        >
          hello
        </Button>
        <Button
          variant={"Secondary"}
          onClickHandler={() => {
            3 + 2;
          }}
        >
          hello
        </Button>
        <Button
          variant={"Tertiary"}
          onClickHandler={() => {
            3 + 2;
          }}
        >
          hello
        </Button>
        <Button
          variant={"Destructive"}
          onClickHandler={() => {
            3 + 2;
          }}
        >
          hello elahe
        </Button> */}
        {/* <CheckBoxButton /> */}
        {/* <Checkbox /> */}
        {/* <p>سلام دنیا</p> */}
        {/* <BookCardVer />
        <BookCardVer />
        <BookCardVer /> */}
        <div className="p-[80px]">
          <BookCarousel />
        </div>
        <ContentType />
        {/* <FilterTextBooks />
        <FilterTextBooks /> */}
        <Filter />
      </main>
      <footer className="w-full h-full">
        <FooterMobSize />
        <FooterDes />
      </footer>
    </div>
  );
}
