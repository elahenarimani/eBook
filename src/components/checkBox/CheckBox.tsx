import * as React from "react";
import { CheckIcon } from "lucide-react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={`w-[20px] h-[20px] border border-gray-200 rounded-[4px] flex items-center justify-center cursor-pointer
        data-[state=checked]:bg-[#744D7E] data-[state=checked]:border-none
     data-[state=unchecked]:focus:outline-none data-[state=unchecked]:focus:ring-3 data-[state=unchecked]:focus:ring-[#C3A4CE] data-[state=unchecked]:focus:bg-white data-[state=unchecked]:focus:border-[1px] data-[state=unchecked]:focus:border-[#744D7E]
     data-[state=checked]:focus:outline-none data-[state=checked]:focus:ring-3 data-[state=checked]:focus:ring-[#C3A4CE] data-[state=checked]:focus:bg-[#744D7E] data-[state=checked]:focus:border-none
      data-[state=unchecked]:disabled:border-[#B0B0B0] data-[state=unchecked]:disabled:border-[1px] data-[state=unchecked]:disabled:cursor-not-allowed
      data-[state=checked]:disabled:border-[#B0B0B0] data-[state=checked]:disabled:border-[1px] data-[state=checked]:disabled:cursor-not-allowed data-[state=checked]:disabled:bg-[#D7D7D7]
    data-[state=checked]:active:bg-[#744D7E] data-[state=checked]:active:border-none data-[state=unchecked]:active:border-[#744D7E]
     transition-transform duration-150 ease-out
        data-[state=checked]:scale-110
    ${className}`}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-[#D7D7D7] transition-none data-[state=checked]:disabled:text-[#B0B0B0]"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export default Checkbox;
