"use client";
import React from "react";

interface BTNProps {
  onClickHandler?: () => void;
  variant?:
    | "Primary"
    | "Secondary"
    | "Tertiary"
    | "Destructive"
    | "publicButton";
  children?: React.ReactNode;
  className?: string;
  styles?: string;
  disabled?: boolean;
}

interface variantsProps {
  Primary: string;
  Secondary: string;
  Tertiary: string;
  Destructive: string;
  publicButton: string;
}
const Button = ({
  onClickHandler,
  variant = "Primary",
  children,
  className,
  styles = "h-[38px] md:h-[44px] p-[12px] flex justify-between items-center gap-[8px] cursor-pointer",
  disabled,
}: BTNProps) => {
  const variants: variantsProps = {
    Primary:
      "w-[139px] md:w-[148px]  rounded-[8px] bg-primary text-white border-[1px] border-gray-5" +
      "hover:bg-primary/600 focus:bg-primary/600 focus:ring-4 focus:ring-[#C4A6CF] active:bg-[#563C5C]" +
      "disabled:bg-gray-30  disabled:cursor-not-allowed",
    Secondary:
      "w-[139px] md:w-[148px]  rounded-[8px] border-[1.5px] border-gray-50 bg-[#EBEBEB] border-[1.5px] border-gray-40 " +
      "hover:bg-gray-20 hover:border-[1.5px] hover:border-gray-30 focus:bg-gray-30 focus:ring-2 focus:ring-[#D9C6E1]    active:bg-Primary-100 active:border-[1.5px] active:border-gray-20" +
      "disabled:bg-gray-30 disabled:border-gray-30 disabled:cursor-not-allowed",
    Tertiary:
      "w-[139px] md:w-[148px] rounded-[8px] bg-gray-20 " +
      "hover:bg-gray-20 focus:bg-gray-5 focus:ring-2 focus:ring-[#D9C6E1] active:bg-[#563C5C]" +
      "disabled:bg-gray-30  disabled:cursor-not-allowed",
    Destructive:
      "w-[139px] md:w-[156px] rounded-[8px] !bg-[#EC0B1A] text-white " +
      "hover:bg-[#FF2E3C] focus:bg-[#EC0B1A] focus:ring-4 focus:ring-[#FF9AA1] active:bg-[#8C1018]" +
      "disabled:bg-gray-30  disabled:cursor-not-allowed disabled:border-[1px] disabled:border-[#FF9AA1]",
    publicButton: "",
  };
  return (
    <button
      className={`${styles || ""} ${variants[variant]} ${className || ""}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
