import * as React from "react";

export function ExternalLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">&nbsp;&#8599;&#65039;</span>
    </a>
  );
}
