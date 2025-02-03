import Link from "next/link";

const Projects = async () => {
  const projects = [
    {
      title: "files",
      description: "A simple file-sharing application.",
      link: "https://github.com/mirorauhala/files",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "rauhala.dev",
      description: "My portfolio site.",
      link: "https://github.com/mirorauhala/rauhala.dev",
      tech: ["Next.js", "TailwindCSS"],
    },
    {
      title: "infra",
      description: "How this site is hosted",
      link: "https://github.com/mirorauhala/infra",
      tech: ["Docker"],
    },
    {
      title: "fi.react.dev",
      description: "The official React.js documentation in Finnish.",
      link: "https://github.com/reactjs/fi.react.dev",
      tech: ["Docusaurus"],
    },
  ];

  return (
    <section className="grid auto-cols-min grid-cols-1 gap-y-8 py-4 pt-12 md:grid-cols-2 md:gap-4">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group relative rounded-xl p-4 transition-colors has-focus-within:bg-white/5 has-hover:bg-white/5"
        >
          <h5 className="font-serif text-2xl font-bold">
            <Link
              href={project.link}
              className="after:absolute after:inset-0 after:block after:content-[''] hover:underline"
            >
              {project.title}
            </Link>
          </h5>
          <p className="text-lg tracking-tight text-white/60 group-focus-within:text-white/100 group-hover:text-white/100">
            {project.description}
          </p>
          <ul className="mt-1 flex gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="text-sm text-white/40 group-focus-within:text-white/60 group-hover:text-white/60"
              >
                {tech}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Projects;
