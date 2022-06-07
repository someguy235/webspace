const Menu = ({ section, setSection, setMode }) => {
  const handleClick = (s) => {
    setSection(s);
  };
  const handleMode = () => {
    setMode((p) => {
      return p === "day" ? "night" : "day";
    });
  };
  return (
    <menu id="menu-area">
      <ul>
        <li className={section === "about" ? "selected" : ""}>
          <button onClick={() => handleClick("about")}>About</button>
        </li>
        <li className={section === "projects" ? "selected" : ""}>
          <button onClick={() => handleClick("projects")}>Projects</button>
        </li>
        <li className={section === "skills" ? "selected" : ""}>
          <button onClick={() => handleClick("skills")}>Skills</button>
        </li>
        <li className={section === "cv" ? "selected" : ""}>
          <button onClick={() => handleClick("cv")}>Résumé</button>
        </li>
      </ul>
      {/* <button onClick={updateMode}>{mode}</button> */}
      <div id="day-night-toggle-container">
        <button id="day-night-toggle" onClick={handleMode}>
          <div id="day-toggle"></div>
          <div id="night-toggle"></div>
        </button>
      </div>
    </menu>
  );
};

export default Menu;
