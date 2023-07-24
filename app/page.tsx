import Image from "next/image";
import Link from "next/link";
import Projects from "./projects";
import { Footer } from "./Footer";

export default function Index() {
  return (
    <>
      <main className="px-2 py-4 md:pt-16 w-full">
        <section className="mx-auto max-w-4xl">
          <div className="flex justify-between mb-4">
            <div className="inline-flex shrink-0 gap-3 items-center relative">
              <div>
                <Image
                  src="https://avatars.githubusercontent.com/u/4082806"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
              </div>
              <div className="group">
                <Link
                  href="/"
                  className="after:contents-['/'] after:w-full after:h-full after:absolute after:top-0 after:left-0 font-bold leading-4 group-hover:opacity-60 active:opacity-80"
                >
                  Miro Rauhala
                </Link>
                <p className="leading-4 text-black/60 group-hover:opacity-60">
                  @mirorauhala
                </p>
              </div>
            </div>
            <ul className="flex flex-col text-right">
              <li>
                <Link
                  href="https://twitter.com/mirorauhala"
                  className="font-bold text-sm hover:opacity-60 active:opacity-80"
                  target="_blank"
                  rel="noopener"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/mirorauhala"
                  className="font-bold text-sm hover:opacity-60 active:opacity-80"
                  target="_blank"
                  rel="noopener"
                >
                  Telegram
                </Link>
              </li>
            </ul>
          </div>

          <h1 className="font-black text-5xl pt-8 md:pt-12 md:text-7xl max-w-2xl mb-6 tracking-tighter dark:text-white">
            Hey,
            <br />
            I&apos;m a full-stack developer.
          </h1>
          <p className="text-xl max-w-2xl tracking-tight mb-3">
            Interested in all things web, but especially in front-end
            development. Currently working at Futurice.
          </p>
        </section>

        <section className="mx-auto max-w-4xl 4xl border-t dark:border-white/20 mt-5 py-6">
          <h2 className="text-4xl font-black tracking-tighter mb-5 dark:text-white">
            Projects
          </h2>

          <Projects />
        </section>
        <Footer />
      </main>
    </>
  );
}
