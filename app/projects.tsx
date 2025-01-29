import Link from "next/link";

const Projects = async () => {
  const projects = [
    {
      title: "filebase",
      description: "A simple file-sharing application.",
      link: "https://github.com/mirorauhala/filebase",
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
    <ol className="grid auto-cols-min grid-cols-2 gap-4 py-4 pt-12">
      {projects.map((project) => (
        <li key={project.title}>
          <h5 className="font-serif text-2xl font-bold">
            <Link href={project.link}>{project.title}</Link>
          </h5>
          <p className="text-lg tracking-tight">{project.description}</p>
          <ul className="mt-1 flex gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className="text-sm text-white/60">
                {tech}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default Projects;
