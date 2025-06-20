"use client";

// ** Hooks
import { useHash } from "@/hooks/useHash";

// ** Icons
import { User, FileText, FolderKanban, Send } from "lucide-react";

// ** Lib Imports
import { cn } from "@/lib/utils";

// ** Types
import { HashSection } from "@/types/hash";

const menuItems = [
  { icon: <User />, label: "About" },
  { icon: <FileText />, label: "Resume" },
  { icon: <FolderKanban />, label: "Projects" },
  { icon: <Send />, label: "Contact" },
];
const Sidebar = () => {
  const [hash, setHash] = useHash();

  return (
    <div className="fixed h-screen w-[78px]">
      <ul className="border-border flex flex-col rounded border">
        {menuItems.map((item, index) => {
          const hashItems = item.label.toLowerCase() as HashSection;
          return (
            <li
              onClick={() => setHash(hashItems)}
              key={index}
              className={cn(
                "border-border text-muted flex cursor-pointer flex-col items-center gap-1 border-b bg-gradient-to-r from-[#00000061] via-[#ffffff1c] bg-[length:200%_100%] bg-right-top px-1 py-4 transition-colors",
                {
                  "text-primary": hash === `#${hashItems}`,
                },
              )}>
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
