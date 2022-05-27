import { StrictMode, useState } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import Sections from "./Sections";

const App = () => {
  const [section, setSection] = useState("about");
  return (
    <div id="content">
      <Header />
      <Menu section={section} setSection={setSection} />
      <div id="sections-area">
        <Sections section={section} />
      </div>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
