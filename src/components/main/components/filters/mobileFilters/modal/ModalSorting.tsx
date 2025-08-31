import React, { useEffect, useRef } from "react";

import Button from "@/components/button/Button";
import Checkbox from "@/components/checkBox/CheckBox";
interface ModalProp {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
type SortingOptions = string[];
const ModalSorting = ({ showModal, setShowModal }: ModalProp) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
        console.log(
          "event target",
          modalRef?.current?.contains(event?.target as Node),
        );
        console.log("event target", event?.target as Node);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);
  const sortingOptions: SortingOptions = [
    "پر فروش ترین",
    "جدید ترین",
    "گران ترین",
    "ارزان ترین",
    "محبوب ترین",
  ];
  return (
    <div className="sm:hidden w-full min-h-screen fixed inset-0 flex justify-end items-end bg-[#F5F6F8]/90 z-50">
      <div
        className="w-[390px] !h-[272px] rounded-[8px] p-[16px] gap-[16px] flex flex-col justify-between items-start bg-white"
        ref={modalRef}
      >
        <p className="font-semibold text-[#444444]">نمایش بر اساس</p>
        <div className="flex h-full w-full flex-col gap-3">
          {sortingOptions.map((option) => (
            <label
              key={option}
              className="flex h-[20px] w-full flex-row items-center gap-2 text-[14px] text-[#444444]"
            >
              <Checkbox />
              <span className="pb-[4px]">{option}</span>
            </label>
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

export default ModalSorting;
