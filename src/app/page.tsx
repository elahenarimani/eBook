// "use client";
// import Button from "@/components/button/Button";
import FooterDes from "../components/footer/FooterDes";

import FooterMobSize from "@/components/footer/FooterMobSize";

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
      </main>
      <footer className="w-full h-full">
        <FooterMobSize />
        <FooterDes />
      </footer>
    </div>
  );
}
