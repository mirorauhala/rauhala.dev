import { type ForwardedRef, forwardRef } from "react";
import clsx from "clsx";

type Props = {
  className?: React.ReactNode;
};

export type Ref = HTMLDivElement;

function HoverComponent({ className }: Props, ref: ForwardedRef<Ref>) {
  return (
    <div
      ref={ref}
      aria-hidden={true}
      className={clsx(
        "pointer-events-none absolute top-0 left-0 transition-[width,transform,opacity] duration-150 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] will-change-[width,transform,opacity]",
        className,
      )}
    />
  );
}

export const Hover = forwardRef<Ref, Props>(HoverComponent);
