// ** React Imports
import { InputHTMLAttributes } from "react";

// ** Utils Imports
import { cn } from "@/lib/utils";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
  isTextfield?: boolean;
};

const input = ({
  placeholder,
  isTextfield,
  fullWidth = false,
  className,
  ...rest
}: Props) => {
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
        "text-foreground bg-input rounded border-none px-7 py-5 text-sm font-medium outline-none",
        {
          "flex-1": fullWidth,
          "flex-1/2": !fullWidth,
        },
        className,
      )}
      {...rest}
    />
  );
};

export default input;
