// ** Library Imports
import type { LucideIcon } from "lucide-react";

// ** Lib
import { cn } from "@/lib/utils";

// ** Props
type Props = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

const IconButton = ({ icon: Icon, size = "md" }: Props) => {
  return (
    <button className="group bg-fade-gradient-right hover-reverse-gradient-right text-muted flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-lg">
      {
        <Icon
          className={cn(
            sizeMap[size],
            "group-hover:text-primary transition-colors duration-500",
          )}
        />
      }
    </button>
  );
};

export default IconButton;
