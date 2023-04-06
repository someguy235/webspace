type MenuProps = {
  section: string;
  setSection: Function;
  setMode: Function;
};
const Menu = ({ section, setSection, setMode }: MenuProps) => {
  const handleClick = (s: string) => {
    setSection(s);
  };
  const handleMode = () => {
    setMode((p: string) => {
      return p === "day" ? "night" : "day";
    });
  };
  return (
    <menu id="menu-area">
      <ul>
        <li className={section === "about" ? "selected" : ""}>
          <button
            onClick={() => handleClick("about")}
            aria-label="select 'about' section"
          >
            About
          </button>
        </li>
        <li className={section === "projects" ? "selected" : ""}>
          <button
            onClick={() => handleClick("projects")}
            aria-label="select 'projects' section"
          >
            Projects
          </button>
        </li>
        <li className={section === "cv" ? "selected" : ""}>
          <button
            onClick={() => handleClick("cv")}
            aria-label="select 'cv' section"
          >
            Résumé
          </button>
        </li>
      </ul>
      <div id="day-night-toggle-container">
        <button
          id="day-night-toggle"
          aria-label="toggle light or dark mode"
          onClick={handleMode}
        >
          <div id="day-toggle"></div>
          <div id="night-toggle"></div>
        </button>
      </div>
    </menu>
  );
};

export default Menu;
