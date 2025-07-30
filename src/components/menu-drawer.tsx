"use client";

// ** React Imports
import { useState } from "react";

// ** Components
import IconButton from "@/components/icon-button";

// ** Hooks
import { useHash } from "@/hooks/useHash";

// ** Icons
import { Menu, LinkedinIcon, FacebookIcon, GithubIcon } from "lucide-react";

// ** Utils
import { cn } from "@/lib/utils";

// ** Types
import { HashSection } from "@/types/hash";

const menuItems = ["About", "Resume", "Projects", "Contact"];

function MenuDrawer() {
  const socialIcons = [
    {
      icon: <LinkedinIcon className="size-4.5" />,
      href: "https://www.linkedin.com/in/minh-kh%C3%B4i-ng%C3%B4-45ba8123a",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon className="size-4.5" />,
      href: "https://github.com/LegnoO",
      label: "GitHub",
    },
    {
      icon: <FacebookIcon className="size-4.5" />,
      href: "https://www.facebook.com/legnooo/",
      label: "Facebook",
    },
  ];
  const [hash, setHash] = useHash();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(hasItem: HashSection) {
    setIsOpen(false);
    setHash(hasItem);
  }

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
        <div className="size-full overflow-scroll px-6 py-8 ![scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center justify-between gap-6">
            <a className="text-3xl">Devon</a>
            <button
              className="text-foreground hover:text-primary cursor-pointer text-3xl transition"
              onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="mt-14">
            <h3 className="mb-3 text-3xl font-bold">{`Hi, I'm Minh Khôi`}</h3>
            <p className="text-muted text-sm">
              Frontend Developer passionate about creating smooth user
              experiences.
            </p>
          </div>
          <div className="mt-8">
            {menuItems.map((label) => {
              const hashItems = `#${label.toLowerCase()}` as HashSection;
              return (
                <li
                  onClick={() => handleClick(hashItems)}
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
            <h3 className="mb-4 text-3xl font-bold">Information</h3>
            <div className="text-muted space-y-2 text-base leading-6">
              <p>+84 937 525 530</p>
              <p>ngominhkhoi1108@gmail.com</p>
              <p>Ho Chi Minh, Go Vap</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-4 text-3xl font-bold">Follow Me</h3>
            <div role="list" className="flex items-center gap-3">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="hover:bg-foreground border-foreground text-foreground flex size-9 cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300 hover:text-black">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuDrawer;
