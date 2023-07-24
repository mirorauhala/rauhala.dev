import Link from "next/link";

const Projects = async () => {
  const projects = [
    {
      title: "mirorauhala/filebase",
      description: "A simple file-sharing application.",
      link: "https://github.com/mirorauhala/filebase",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "reactjs/fi.react.dev",
      description: "The official React.js documentation in Finnish.",
      link: "https://github.com/reactjs/fi.react.dev",
      tech: ["Docusaurus"],
    },
  ];

  return (
    <ol className="grid gap-4 grid-cols-2 auto-cols-min">
      {projects.map((project) => (
        <li key={project.title}>
          <h5 className="font-bold text-xl">
            <Link
              href={project.link}
              className="underline underline-offset-1 decoration-2 decoration-blue-500"
            >
              {project.title}
            </Link>
          </h5>
          <p className="tracking-tight text-lg">{project.description}</p>
          <ul className="flex gap-2 mt-1">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="text-sm text-gray-500 dark:text-white/60"
              >
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
