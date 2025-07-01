"use client";

// ** Components
import IconButton from "@/components/icon-button";

// ** Context
import { useTheme } from "@/context/theme-context";

// ** Hoks
import useIsMounted from "@/hooks/useIsMounted";

// ** Icons
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const isMounted = useIsMounted();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <div className="container">
        <div className="border-border border-b py-4">
          <ul className="flex items-center justify-between">
            <li className="text-3xl">
              <a>Devon</a>
            </li>
            <li onClick={() => toggleTheme()}>
              {isMounted && (
                <IconButton icon={theme === "light" ? Sun : Moon} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
