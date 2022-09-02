import * as React from "react";
import ExternalSymbol from "./ExternalLink";
import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";

const NavLink = tw.a`transition py-1 px-2 hover:bg-gray-200 rounded-lg`;

export function Navigation() {
  return (
    <nav className="flex flex-col justify-between p-4 w-64 border-r bg-gray-50 overflow-auto">
      <div className="flex gap-3 items-center">
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/4082806"
            alt="Avatar"
            width="48px"
            height="48px"
            className="rounded-xl"
          />
        </div>
        <div>
          <p className="font-bold">Miro Rauhala</p>
        </div>
      </div>

      <ul>
        <li>
          <NavLink>
            <a className="inline-flex py-1 px-2 mb-1">Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <a className="inline-flex py-1 px-2 bg-gray-200 rounded-lg">Home</a>
          </NavLink>
        </li>
      </ul>

      <div className="flex flex-col gap-1">
        <ul className="flex gap-2">
          <li>
            <Link href="https://github.com">
              <NavLink>
                GitHub
                <ExternalSymbol />
              </NavLink>
            </Link>
          </li>
          <li>
            <NavLink href="https://linkedin.com">
              LinkedIn
              <ExternalSymbol />
            </NavLink>
          </li>
        </ul>
        <p className="text-xs text-black opacity-60">
          &copy; Miro Rauhala. Licensed under ISC.
        </p>
      </div>
    </nav>
  );
}
