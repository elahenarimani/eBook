import React, { useEffect, useRef } from "react";

import Button from "@/components/button/Button";

interface ModalProp {
  showModalFilter: boolean;
  setShowModalFilter: (value: boolean) => void;
}
type FiltersOptions = string[];
const ModalBookFilter = ({
  showModalFilter,
  setShowModalFilter,
}: ModalProp) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModalFilter(false);
        console.log(
          "event target",
          modalRef?.current?.contains(event?.target as Node),
        );
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModalFilter]);
  const filtersOptions: FiltersOptions = [
    "نوع محتوا",
    "نویسنده، مترجم یا راوی",
    "ناشر",
  ];
  return (
    <div className="sm:hidden w-full min-h-screen fixed inset-0 flex justify-end items-end bg-[#F5F6F8]/90 z-50">
      <div
        className="w-[390px] !h-[272px] rounded-[8px] p-[16px] gap-[16px] flex flex-col justify-between items-start bg-white"
        ref={modalRef}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <p className="font-semibold text-[#444444]">فیلتر ها</p>
          <Button
            className="!w-[104px] text-[#744D7E]"
            variant="Tertiary"
            onClickHandler={() => {
              setShowModalFilter(false);
            }}
          >
            لغو فیلتر ها
          </Button>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-[12px]">
          {filtersOptions.map((item, index) => (
            <div
              className="w-full flex flex-row justify-between items-center p-[8px]"
              key={index}
            >
              <p className="text-[14px]">{item}</p>
              <div className="w-16px h-[16px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6669 13.8339C10.5342 13.8345 10.4068 13.7816 10.3135 13.6872L4.98021 8.35388C4.78524 8.15867 4.78524 7.84243 4.98021 7.64722L10.3135 2.31388C10.5106 2.13031 10.8176 2.13573 11.008 2.32613C11.1984 2.51654 11.2038 2.82354 11.0202 3.02055L6.04021 8.00055L11.0202 12.9805C11.2152 13.1758 11.2152 13.492 11.0202 13.6872C10.927 13.7816 10.7996 13.8345 10.6669 13.8339Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[358px] !h-[38px]">
          <Button
            variant="Primary"
            className="w-full h-full font-semibold flex justify-center items-center !pt-[5px]"
          >
            اعمال فیلتر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalBookFilter;
