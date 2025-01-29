import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="fixed w-full font-serif backdrop-blur-2xl dark:from-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-6">
        <div className="flex items-center justify-between">
          <ul className="flex flex-row gap-1 text-right md:gap-4">
            <li>
              <Link
                href="/"
                className="rounded-xl bg-black/10 p-2 px-4 text-xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-70 md:text-2xl"
              >
                Miro
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="p-2 text-xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-70 md:text-2xl"
              >
                Work
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row gap-1 text-right md:gap-4">
            <li>
              <Link
                href="https://github.com/mirorauhala"
                className="p-2 text-xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-70 md:text-2xl"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/mirorauhala"
                className="p-2 text-xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-70 md:text-2xl"
                target="_blank"
                rel="noopener"
              >
                Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
