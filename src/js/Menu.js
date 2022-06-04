const Menu = ({ section, setSection, mode, setMode }) => {
  const handleClick = (s) => {
    setSection(s);
  };
  const updateMode = () => {
    console.log("mode: " + mode);
    setMode((cur) => {
      return cur === "day" ? "night" : "day";
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
          <button onClick={() => handleClick("cv")}>CV</button>
        </li>
      </ul>
      {/* <button onClick={updateMode}>{mode}</button> */}
    </menu>
  );
};

export default Menu;
