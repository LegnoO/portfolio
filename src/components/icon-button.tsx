// ** React Imports
import type { ButtonHTMLAttributes } from "react";

// ** Library Imports
import type { LucideIcon } from "lucide-react";

// ** Utils
import { cn } from "@/lib/utils";

// ** Props
type Props = {
  icon: LucideIcon;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ icon: Icon, className = "", ...rest }: Props) => {
  return (
    <button className={cn("group bg-fade-primary hover-reverse-gradient-right cursor-pointer rounded-full p-4 shadow-lg", className)} {...rest}>
      {
        <Icon className="text-muted group-hover:text-primary transition-colors duration-500" />
      }
    </button>
  );
};

export default IconButton;
