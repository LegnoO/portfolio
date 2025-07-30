"use client";

// ** Components
import IconButton from "@/components/icon-button";
import MenuDrawer from "@/components/menu-drawer";

// ** Icons
import { Sun, Moon } from "lucide-react";

// ** Context
import { useTheme } from "@/context/theme-context";

// ** Hooks
import useIsMounted from "@/hooks/useIsMounted";

const Header = () => {
  const isMounted = useIsMounted();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <div className="container">
        <div className="border-border border-b py-4">
          <div className="flex items-center justify-between">
            <a className="text-3xl">Devon</a>

            <div role="list" className="flex items-center gap-3">
              {isMounted && (
                <IconButton
                  onClick={() => toggleTheme()}
                  icon={theme === "light" ? Sun : Moon}
                />
              )}

              <MenuDrawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
