import Button from "../../../button/Button";

export default function CategoriesSection() {
  return (
    <div className="w-full h-full">
      <div className="w-[146px] mb-[24px]">
        <p className="text-[16px] text-white">دسته بندی پیشنهادی</p>
      </div>
      <ul className="w-[122px] text-white text-[12px] font-light list-disc list-inside flex flex-col justify-between gap-[12px] pb-[56px]">
        <li>
          <Button styles="" variant="publicButton">
            کتاب رایگان
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب صوتی
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب کودک
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب تاریخ
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب شعر
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب داستان
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب فلسفه
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب عاشقانه
          </Button>
        </li>
        <li>
          <Button styles="" variant="publicButton">
            کتاب ایران
          </Button>
        </li>
      </ul>
    </div>
  );
}
