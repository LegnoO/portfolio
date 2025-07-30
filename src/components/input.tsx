// ** React Imports
import { InputHTMLAttributes } from "react";

// ** Utils Imports
import { cn } from "@/lib/utils";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isTextfield?: boolean;
};

const input = ({ placeholder, isTextfield, className, ...rest }: Props) => {
  if (isTextfield)
    return (
      <textarea
        placeholder={placeholder || ""}
        className="text-foreground bg-input min-h-[160px] resize-y overflow-auto rounded border-none px-7 py-5 text-sm font-medium transition-[height] duration-300 outline-none"
      />
    );

  return (
    <input
      placeholder={placeholder || ""}
      type="text"
      className={cn(
        "text-foreground bg-input flex-1 rounded border-none px-7 py-5 text-sm font-medium outline-none",
        className,
      )}
      {...rest}
    />
  );
};

export default input;
