import React from "react";

interface inputProps {
  type?: string;
  value?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  checked?: boolean;
  ariaLabel?: string;
  style?: React.CSSProperties;
}
const Input = ({
  type,
  value,
  name,
  className,
  placeholder,
  handleChange,
  maxLength,
  minLength,
  checked,
  ariaLabel,
  style,
}: inputProps) => {
  return (
    <div className="w-full h-full">
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        checked={checked}
        aria-label={ariaLabel}
        style={style}
      />
    </div>
  );
};

export default Input;
