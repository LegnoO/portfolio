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
      <ul className="nav flex flex-col rounded">
        {menuItems.map(({ icon, label }) => {
          const hashItems = `#${label.toLowerCase()}` as HashSection;
          return (
            <li
              onClick={() => setHash(hashItems)}
              key={label}
              className={cn(
                "nav-items flex cursor-pointer flex-col items-center gap-1 px-1 py-4",
                {
                  "text-primary": hash === hashItems,
                },
              )}>
              {icon}
              <span className="text-xs">{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
