// import * as Checkbox from "@radix-ui/react-checkbox";
// import { Check } from "lucide-react";
// import React from "react";

// const CheckBox = () => {
//   return (
//     <div className="flex items-center gap-2">
//       <Checkbox.Root
//         id="agree"
//         className=" w-6 h-6 border border-gray-400 rounded flex items-center justify-center
//     transition-colors
//     focus:outline-none focus:ring-2 focus:ring-purple-500
//     disabled:opacity-50 disabled:cursor-not-allowed
//     active:border-purple-700"
//       >
//         <Checkbox.Indicator>
//           <Check className="w-4 h-4 text-purple-700" />
//         </Checkbox.Indicator>
//       </Checkbox.Root>
//       <label htmlFor="agree">موافقت با قوانین</label>
//     </div>
//   );
// };

// export default CheckBox;
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import * as React from "react";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
    disabled
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
