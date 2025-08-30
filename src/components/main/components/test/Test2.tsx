import React from "react";
interface TestProp {
  slug: string[] | string;
}
const Test2 = ({ slug }: TestProp) => {
  return (
    <div className="text-red-600 font-semibold text-center">
      {slug[0]}/{slug[1]}
    </div>
  );
};

export default Test2;
