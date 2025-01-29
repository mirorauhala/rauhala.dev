import { Footer } from "../footer";
import { Nav } from "../nav";
import Projects from "../projects";

export default function Work() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-screen-2xl border-white/20 px-4 py-6 pt-24">
        <h2 className="mb-5 font-serif text-7xl font-bold tracking-tighter text-white">
          Personal projects
        </h2>

        <p className="w-2/3 py-2 font-serif text-2xl text-white">
          These are some of my projects. Most of my professional work is
          confidential, unfortunately. I hope that these give you some idea of
          my work.
        </p>

        <Projects />
      </main>
      <Footer />
    </>
  );
}
