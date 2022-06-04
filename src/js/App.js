import { StrictMode, useState } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Sections from "./Sections";

const App = () => {
  const [section, setSection] = useState("about");
  const [mode, setMode] = useState("day");
  return (
    <div id="content" className={mode}>
      <Header />
      <Menu
        section={section}
        setSection={setSection}
        mode={mode}
        setMode={setMode}
      />
      <div id="sections-area">
        <Sections section={section} mode={mode} />
      </div>
      <Footer mode={mode} setMode={setMode} />
      <div id="day-sky-container">
        <div id="day-sky-grid-container">
          <div style={{ opacity: mode === "day" ? 1 : 0 }} id="day-sky"></div>
        </div>
      </div>
      <div id="night-sky-container">
        <div id="night-sky-grid-container">
          <div style={{ opacity: mode === "day" ? 0 : 1 }} id="night-sky"></div>
        </div>
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
