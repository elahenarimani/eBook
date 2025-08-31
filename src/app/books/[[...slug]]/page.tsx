import FiltersByBreadCrumb from "@/components/main/components/filtersByBreadCrumb/FiltersByBreadCrumb";
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
        <div className="!max-w-[390px] mx-auto sm:!max-w-[1280px] w-full h-full">
          <FiltersByBreadCrumb slug={slug} />
          {/* <Breadcrumb1 slug={slug} /> */}
          {/* <CategorySlider slug={slug} /> */}
        </div>
      </div>
    );
  }
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
