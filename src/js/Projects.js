import projects from "../data/projects.json";

import android_logo from "../img/logos/android.png";
import angularjs_logo from "../img/logos/angularjs.png";
import d3_logo from "../img/logos/d3.png";
import express_logo from "../img/logos/express.png";
import grails_logo from "../img/logos/grails.png";
import groovy_logo from "../img/logos/groovy.png";
import jquery_logo from "../img/logos/jquery.png";
import js_logo from "../img/logos/javascript.png";
import leaflet_logo from "../img/logos/leaflet.png";
import mongo_logo from "../img/logos/mongo.png";
import node_logo from "../img/logos/node.png";
import opencv_logo from "../img/logos/opencv.png";
import postgres_logo from "../img/logos/postgres.png";
import python_logo from "../img/logos/python.png";
import react_logo from "../img/logos/react.png";
import ts_logo from "../img/logos/typescript.png";

const ProjectTitle = ({ project }) => {
  if (!project.name) return null;
  return (
    <h3 className="project-title">
      {project.name
        .map((name, i) =>
          project.link[i] ? (
            <a
              href={project.link[i]}
              key={name}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          ) : (
            name
          )
        )
        .reduce((prev, curr) => [prev, " / ", curr])}
    </h3>
  );
};

const ProjectTech = ({ project }) => {
  if (!project.tech || project.tech.length === 0) return null;
  const logoMap = {
    Android: android_logo,
    AngularJS: angularjs_logo,
    D3JS: d3_logo,
    Express: express_logo,
    Grails: grails_logo,
    Groovy: groovy_logo,
    JavaScript: js_logo,
    jQuery: jquery_logo,
    LeafletJS: leaflet_logo,
    MongoDB: mongo_logo,
    NodeJS: node_logo,
    OpenCV: opencv_logo,
    Postgres: postgres_logo,
    Python: python_logo,
    ReactJS: react_logo,
    TypeScript: ts_logo,
  };
  return (
    <div className="project-tech">
      {project.tech.map((tech) => {
        if (logoMap[tech]) {
          return (
            <span key={tech}>
              <img src={logoMap[tech]} alt={tech} title={tech} />
            </span>
          );
        } else {
          return <span key={tech}>{tech}</span>;
        }
      })}
    </div>
  );
};

const ProjectGit = ({ project }) => {
  if (!project.github) return null;
  return (
    <div className="project-git">
      <a href={project.github} target="_blank" rel="noreferrer">
        GitHub &gt; someguy235 &gt; {project.name}
      </a>
    </div>
  );
};

const ProjectImg = ({ project }) => {
  if (!project.img || project.img.length === 0) return null;
  return (
    <div className="project-imgs">
      {project.img.map((img) => (
        <div key={img.alt}>
          <img
            key={img.alt}
            src={`data:${img.mime};base64,${img.data}`}
            alt={img.alt}
          />
        </div>
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
