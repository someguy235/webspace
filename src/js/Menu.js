const Menu = ({ section, setSection }) => {
  const handleClick = (s) => {
    setSection(s);
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
        <li className={section === "pubs" ? "selected" : ""}>
          <button onClick={() => handleClick("pubs")}>Publications</button>
        </li>
        <li className={section === "skills" ? "selected" : ""}>
          <button onClick={() => handleClick("skills")}>Skills</button>
        </li>
        <li className={section === "cv" ? "selected" : ""}>
          <button onClick={() => handleClick("cv")}>CV</button>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
