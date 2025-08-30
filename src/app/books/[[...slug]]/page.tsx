import CategorySlider from "@/ComponentDynamic/CategorySlider";
import Breadcrumb1 from "@/components/main/components/breadcrumb/Breadcrumb1";
import Test2 from "@/components/main/components/test/Test2";

// import { ContentType, MainCategory, SubCategory } from "@/type/book";
interface PageProps {
  params: Promise<{ slug: string[] | string }>;
}
const page = async ({ params }: PageProps) => {
  const slug = (await params).slug;
  if (slug?.length === 3) {
    return (
      <div>
        <h2>
          now you have 2 slug :{slug[0]} and {slug[1]}
        </h2>
        <Test2 slug={slug} />
      </div>
    );
  } else if (slug?.length === 2) {
    return (
      <div className="w-full py-[12px] px-[20px] overflow-x-hidden">
        <h2 className="text-amber-300">now you have 1 slug :{slug[0]}</h2>;
        {/* <Test slug={slug} /> */}
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div className="w-full sm:w-full h-full !px-[20px] xl:px-[80px] overflow-x-hidden sm:overflow-auto">
        <div className="!max-w-[390px] mx-auto sm:!max-w-[1280px]">
          <Breadcrumb1 slug={slug} />
          <CategorySlider slug={slug} />
        </div>
      </div>
    );
  }
  // const page = () => {
  //   const slug = params.slug || [];
  //   const contentType = slug[0] as ContentType | undefined;
  //   const category = slug[1] as MainCategory | undefined;
  //   const subCategory = slug[2] as SubCategory | undefined;

  //   console.log("category", category);
  //   console.log("subCategory", subCategory);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">لیست کتاب‌ها</h1>
      {/* <p>{console.log("slug", slug)}</p> */}
      {/* 
      {contentType && <h2>نوع محتوا: {contentType}</h2>}
      {category && <h3>دسته‌بندی: {category}</h3>}
      {subCategory && <h4>زیر دسته: {subCategory}</h4>} */}
    </div>
  );
};

export default page;
