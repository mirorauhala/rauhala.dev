import { Footer } from "./footer";
import { Nav } from "./nav";

export default function Index() {
  return (
    <>
      <Nav />
      <div className="flex h-full flex-col items-stretch justify-between gap-y-2 pt-20">
        <div className="flex h-full items-center justify-center">
          <header className="mx-auto max-w-(--breakpoint-2xl) px-4">
            <h1 className="pb-8 font-serif text-5xl font-bold tracking-tighter text-pretty text-[#79262F] md:text-7xl lg:text-9xl">
              Focused on crafting <br />
              <span className="text-wheat text-red-500">
                digital experiences
              </span>{" "}
              people love to use.
            </h1>
            <p className="pb-8 font-serif text-2xl tracking-tighter md:pt-6 md:text-3xl lg:text-4xl">
              Hi there 👋, I&rsquo;m Miro. Currently helping clients build
              better software as a full-stack developer at Futurice. If
              you&rsquo;re interested in my work, see some of my personal
              projects.
            </p>
          </header>
        </div>
        <Footer />
      </div>
    </>
  );
}
