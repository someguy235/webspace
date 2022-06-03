import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CV from "./Cv";

const Sections = ({ section, mode }) => {
  switch (section) {
    case "about":
      return <About mode={mode} />;
    case "projects":
      return <Projects />;
    case "skills":
      return <Skills />;
    case "cv":
      return <CV />;
  }
};

export default Sections;
