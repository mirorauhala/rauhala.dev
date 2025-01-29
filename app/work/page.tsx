import { Footer } from "../footer";
import { Nav } from "../nav";
import Projects from "../projects";

export default function Work() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-screen-2xl border-white/20 px-4 py-6 pt-24">
        <h2 className="mb-5 font-serif text-7xl font-bold tracking-tighter text-white">
          My Work
        </h2>

        <p className="w-2/3 py-2 font-serif text-2xl text-white">
          Here are some of my projects that I've worked on. Most of my
          professional work is confidential, unfortunately. I hope that these
          give you some idea of what I do.
        </p>

        <Projects />
      </main>
      <Footer />
    </>
  );
}
