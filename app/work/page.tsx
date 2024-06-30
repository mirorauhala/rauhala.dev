import Projects from "../projects";

export default function Work() {
  return (
    <>
      <hr className="mx-auto my-6 max-w-screen-2xl border-stone-200 dark:border-white/30" />

      <section className="mx-auto mt-5 max-w-screen-2xl px-4 py-6 dark:border-white/20">
        <h2 className="mb-5 font-serif text-4xl font-bold tracking-tighter dark:text-white">
          Personal projects
        </h2>

        <p className="pb-2 font-serif text-xl">
          These are some of my projects worth showcasing. Most of my
          professional work is confidential, unfortunately. I hope that these
          give you some idea of my work.
        </p>

        <Projects />
      </section>
    </>
  );
}
