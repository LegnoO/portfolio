// ** Library Imports
import type { LucideIcon } from "lucide-react";

// ** Props
type Props = {
  icon: LucideIcon;
};

const IconButton = ({ icon: Icon }: Props) => {
  return (
    <button className="group bg-fade-gradient-right hover-reverse-gradient-right cursor-pointer rounded-full p-4 shadow-lg">
      {
        <Icon className="text-muted group-hover:text-primary transition-colors duration-500" />
      }
    </button>
  );
};

export default IconButton;
