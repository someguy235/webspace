import About from "./About";
import Projects from "./Projects";
import Pubs from "./Pubs";
import CV from "./Cv";

const Sections = ({ section }) => {
  switch (section) {
    case "about":
      return <About />;
    case "projects":
      return <Projects />;
    case "pubs":
      return <Pubs />;
    case "cv":
      return <CV />;
    default:
      return <span>{section} section</span>;
  }
};

export default Sections;
