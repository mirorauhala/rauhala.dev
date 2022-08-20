import * as React from "react";
import { ExternalLink } from "./ExternalLink";

export function GlobalNav() {
  return (
    <nav className="flex flex-col justify-between p-4 w-64 border-r bg-gray-50">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-xl" />
        <div>
          <p className="font-bold">Miro Rauhala</p>
        </div>
      </div>

      <ul>
        <li></li>
        <li></li>
      </ul>

      <div className="flex flex-col gap-1">
        <ul className="flex gap-3">
          <li>
            <ExternalLink to="https://github.com">GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://linkedin.com">LinkedIn</ExternalLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
