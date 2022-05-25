import About from "./About";
import Projects from "./Projects";

const Sections = ({ section }) => {
  switch (section) {
    case "about":
      return <About />;
    case "projects":
      return <Projects />;
    default:
      return <span>{section} section</span>;
  }
};

export default Sections;
