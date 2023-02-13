import About from "./About";
import Projects from "./Projects";
import CV from "./Cv";

type SectionsParams = {
  section: string;
};
const Sections = ({ section }: SectionsParams) => {
  switch (section) {
    case "about":
      return <About />;
    case "projects":
      return <Projects />;
    case "cv":
      return <CV />;
    default:
      return <About />;
  }
};

export default Sections;
