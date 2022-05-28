import projects from "../data/projects.json";

const ProjectTitle = ({ project }) => {
  if (!project.name) return null;
  return (
    <h3 className="project-title">
      {project.name
        .map((name, i) =>
          project.link[i] ? <a href={project.link[i]}>{name}</a> : name
        )
        .reduce((prev, curr) => [prev, " / ", curr])}
    </h3>
  );
};

const ProjectTech = ({ project }) => {
  if (!project.tech || project.tech.length === 0) return null;
  return (
    <div className="project-tech">
      {project.tech.map((tech) => tech).join(" - ")}
    </div>
  );
};

const ProjectGit = ({ project }) => {
  if (!project.github) return null;
  return (
    <div className="project-git">
      <a href={project.github}>GitHub &gt; someguy235 &gt; {project.name}</a>
    </div>
  );
};

const ProjectImg = ({ project }) => {
  if (!project.img || project.img.length === 0) return null;
  return (
    <div className="project-imgs">
      {project.img.map((img) => (
        <img
          key={img.alt}
          src={`data:${img.mime};base64,${img.data}`}
          alt={img.alt}
        />
      ))}
    </div>
  );
};

const ProjectDesc = ({ project }) => {
  if (!project.desc) return null;
  return (
    <div
      className="project-desc"
      dangerouslySetInnerHTML={{ __html: project.desc }}
    ></div>
  );
};

const Project = ({ project }) => {
  return (
    <div className="project">
      <ProjectTitle project={project} />
      <ProjectTech project={project} />
      <ProjectGit project={project} />
      <ProjectImg project={project} />
      <ProjectDesc project={project} />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects-section">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </section>
  );
};

export default Projects;
