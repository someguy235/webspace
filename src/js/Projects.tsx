import _projects from "../data/projects.json";
const projects = _projects as Project[];

import android_logo from "url:../img/logos/android.png";
import angularjs_logo from "url:../img/logos/angularjs.png";
import d3_logo from "url:../img/logos/d3.png";
import express_logo from "url:../img/logos/express.png";
import grails_logo from "url:../img/logos/grails.png";
import groovy_logo from "url:../img/logos/groovy.png";
import jquery_logo from "url:../img/logos/jquery.png";
import js_logo from "url:../img/logos/javascript.png";
import leaflet_logo from "url:../img/logos/leaflet.png";
import mongo_logo from "url:../img/logos/mongo.png";
import node_logo from "url:../img/logos/node.png";
import opencv_logo from "url:../img/logos/opencv.png";
import passport_logo from "url:../img/logos/passport.png";
import postgres_logo from "url:../img/logos/postgres.png";
import python_logo from "url:../img/logos/python.png";
import react_logo from "url:../img/logos/react.png";
import ts_logo from "url:../img/logos/typescript.png";
import vue_logo from "url:../img/logos/vue.png";

//eslint-disable-next-line
import * as projectImages from "url:../img/imagecompressor/*.png";

type Project = {
  id: string;
  name: string[];
  link: string[];
  tech: string[];
  github: string;
  img: {
    alt: string;
    src: string;
  }[];
  desc: string;
};
type ProjectProps = {
  project: Project;
};
const ProjectTitle = ({ project }: ProjectProps) => {
  if (!project.name) return null;
  return (
    <h3 className="project-title">
      {project.name
        .map<React.ReactNode>((name, i) =>
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

const ProjectTech = ({ project }: ProjectProps) => {
  if (!project.tech || project.tech.length === 0) return null;
  const logoMap: { [key: string]: any } = {
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
    PassportJS: passport_logo,
    Postgres: postgres_logo,
    Python: python_logo,
    ReactJS: react_logo,
    TypeScript: ts_logo,
    VueJS: vue_logo,
  };
  return (
    <div className="project-tech">
      {project.tech.map((tech) => {
        if (logoMap[tech]) {
          return (
            <span key={tech}>
              <img src={logoMap[tech]} alt={tech} title={tech} loading="lazy" />
            </span>
          );
        } else {
          return <span key={tech}>{tech}</span>;
        }
      })}
    </div>
  );
};

const ProjectGit = ({ project }: ProjectProps) => {
  if (!project.github) return null;
  return (
    <div className="project-git">
      <a href={project.github} target="_blank" rel="noreferrer">
        GitHub &gt; someguy235 &gt; {project.name}
      </a>
    </div>
  );
};

const ProjectImg = ({ project }: ProjectProps) => {
  if (!project.img || project.img.length === 0) return null;
  return (
    <div className="project-imgs">
      {project.img.map((img) => (
        <div key={img.alt}>
          <img
            key={img.alt}
            src={projectImages[img.src]}
            title={img.alt}
            alt={img.alt}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

const ProjectDesc = ({ project }: ProjectProps) => {
  if (!project.desc) return null;
  return (
    <div
      className="project-desc"
      dangerouslySetInnerHTML={{ __html: project.desc }}
    ></div>
  );
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project" id={project.id}>
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
        <Project key={project.name[0]} project={project} />
      ))}
    </section>
  );
};

export default Projects;
