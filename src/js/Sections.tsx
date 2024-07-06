import About from "./About";
import Projects from "./Projects";
import CV from "./Cv";

type SectionsParams = {
  section: string;
  mode: string;
};
const Sections = ({ section, mode }: SectionsParams) => {
  switch (section) {
    case "about":
      return <About mode={mode} />;
    case "projects":
      return <Projects />;
    case "cv":
      return <CV />;
    default:
      return <About mode={mode} />;
  }
};

export default Sections;
