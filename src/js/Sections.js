import About from "./About";
import Projects from "./Projects";
import CV from "./Cv";

const Sections = ({ section, mode }) => {
  switch (section) {
    case "about":
      return <About mode={mode} />;
    case "projects":
      return <Projects />;
    case "cv":
      return <CV />;
  }
};

export default Sections;
