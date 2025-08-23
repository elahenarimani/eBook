import Button from "../../../button/Button";

export default function LinksSection() {
  return (
    <div className="w-full h-full">
      <ul className="w-full text-white text-[12px] font-light list-disc list-inside flex flex-col justify-between gap-[12px] pb-[56px]">
        <li className="w-full h-[16px]">
          <Button styles="" variant="publicButton" className="">
            تماس با ما
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles="" variant="publicButton" className="">
            پشتیبانی و سوالات متداول
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles="" variant="publicButton" className="">
            درباره ما
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles="" variant="publicButton" className="">
            حریم خصوصی
          </Button>
        </li>
        <li className="w-full h-[16px]">
          <Button styles="" variant="publicButton" className="">
            قوانین استفاده
          </Button>
        </li>
      </ul>
    </div>
  );
}
