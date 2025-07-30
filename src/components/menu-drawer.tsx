"use client";

// ** React Imports
import { useState } from "react";

// ** Components
import IconButton from "@/components/icon-button";

// ** Hooks
import { useHash } from "@/hooks/useHash";

// ** Icons
import { Menu } from "lucide-react";

// ** Utils
import { cn } from "@/lib/utils";

// ** Types
import { HashSection } from "@/types/hash";

const menuItems = ["About", "Resume", "Projects", "Contact"];

function MenuDrawer() {
  const [hash, setHash] = useHash();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      <div onClick={() => setIsOpen(true)}>
        <IconButton icon={Menu} />
      </div>

      <div
        onClick={() => setIsOpen(false)}
        className={cn("fixed inset-0 z-40 transition-colors", {
          "bg-overlay": isOpen,
          "pointer-events-none bg-transparent": !isOpen,
        })}
      />

      <div
        className={cn(
          "bg-background fixed top-0 right-0 z-50 h-full w-[360px] transform shadow-lg transition-transform duration-300",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          },
        )}>
        <div className="size-full overflow-scroll px-4 py-8 ![scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center justify-between gap-6">
            <a className="text-3xl">Devon</a>
            <button
              className="text-foreground text-3xl"
              onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="mt-16">
            <h3 className="mb-3 text-3xl font-bold">Hello There!</h3>
            <p className="text-muted text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="mt-8">
            {menuItems.map((label) => {
              const hashItems = `#${label.toLowerCase()}` as HashSection;
              return (
                <li
                  onClick={() => setHash(hashItems)}
                  key={label}
                  className={cn(
                    "nav-items flex cursor-pointer flex-col gap-1 px-1 py-2",
                    {
                      "text-primary": hash === hashItems,
                    },
                  )}>
                  <span className="text-base">{label}</span>
                </li>
              );
            })}
          </div>
          <div className="mt-8">
            <h3 className="mb-3 text-3xl font-bold">Information</h3>
            <div className="space-y-2">
              <p className="">+84 937 525 530</p>
              <p className="">ngominhkhoi1108@gmail.com</p>
              <p className="">Ho Chi Minh, Go Vap</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-3 text-3xl font-bold">Follow Me</h3>
            <div role="list" className="flex items-center gap-2">
              <button className="hover:bg-foreground border-foreground flex size-9 cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300 hover:text-black">
                <Menu className="size-4.5" />
              </button>
              <button className="hover:bg-foreground border-foreground flex size-9 cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300 hover:text-black">
                <Menu className="size-4.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuDrawer;
