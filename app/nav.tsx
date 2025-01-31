"use client";
import Link from "next/link";
import { useHover } from "./components/useHover";
import { Hover } from "./components/hover";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  isActive: (activePage: string) => boolean;
};

export const Nav = () => {
  const { navRef: leftNavRef, hoverRef: leftHoverRef } = useHover<
    HTMLUListElement,
    HTMLDivElement
  >();
  const { navRef: rightNavRef, hoverRef: rightHoverRef } = useHover<
    HTMLUListElement,
    HTMLDivElement
  >();

  const pathname = usePathname();

  const leftLinks: NavLink[] = [
    {
      href: "/",
      label: "Miro",
      isActive: (activePage) => activePage === "/",
    },
    {
      href: "/work",
      label: "Portfolio",
      isActive: (activePage) => activePage === "/work",
    },
  ];
  const rightLinks: NavLink[] = [
    {
      href: "https://github.com/mirorauhala",
      label: "GitHub",
      isActive: (activePage) => activePage === "/",
    },
    {
      href: "https://t.me/mirorauhala",
      label: "Telegram",
      isActive: (activePage) => activePage === "/work",
    },
  ];

  return (
    <nav className="fixed w-full font-serif backdrop-blur-2xl">
      <div className="mx-auto max-w-(--breakpoint-2xl) px-4 py-6">
        <div className="flex items-center justify-between">
          <Hover ref={leftHoverRef} className="z-0 rounded-md bg-white/10" />
          <Hover ref={rightHoverRef} className="z-0 rounded-md bg-white/10" />

          <ul className="z-10 flex flex-row" ref={leftNavRef}>
            {leftLinks.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block w-full px-3 py-1 text-lg data-[active=true]:font-bold md:text-2xl"
                    data-active={link.isActive(pathname)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="z-10 flex flex-row" ref={rightNavRef}>
            {rightLinks.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block w-full px-3 py-1 text-lg data-[active=true]:font-bold md:text-2xl"
                    data-active={link.isActive(pathname)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
