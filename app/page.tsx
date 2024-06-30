import Link from "next/link";

import { Footer } from "./Footer";

export default function Index() {
  return (
    <>
      <nav className="from-50% to-100% fixed w-full bg-gradient-to-b from-[#FBF5E8] to-transparent pb-24">
        <div className="mx-auto max-w-screen-2xl px-4 py-6">
          <div className="flex items-center justify-between">
            <ul className="flex flex-row gap-6 text-right">
              <li>
                <Link
                  href="/"
                  className="rounded-xl bg-black/5 px-4 py-2 text-2xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-80"
                >
                  Miro
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-2xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-80"
                >
                  Work
                </Link>
              </li>
            </ul>
            <ul className="flex flex-row gap-6 text-right">
              <li>
                <Link
                  href="https://github.com/mirorauhala"
                  className="text-2xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-80"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/mirorauhala"
                  className="text-2xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-80"
                  target="_blank"
                  rel="noopener"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/mirorauhala"
                  className="text-2xl tracking-tight transition-opacity delay-75 hover:opacity-60 active:opacity-80"
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
      <main>
        <header className="mx-auto max-w-screen-2xl px-4 pt-12 opacity-100">
          <h1 className="text-pretty bg-gradient-to-b from-black/70 to-black bg-clip-text py-24 pb-8 font-serif text-5xl font-bold tracking-tighter text-transparent md:text-9xl">
            Focused on crafting <br />
            <span className="text-wheat text-red-500 selection:text-red-500">
              digital experiences
            </span>{" "}
            people love to use.
          </h1>
          <p className="pt-6 pb-8 font-serif text-xl tracking-tighter md:text-4xl">
            Hi there 👋, I&rsquo;m Miro. Currently helping clients build better
            software as full-stack developer at Futurice. If you're interested
            in my work, see some of my personal projects below.
          </p>
        </header>
      </main>
      <Footer />
    </>
  );
}
