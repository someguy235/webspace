import * as ReactDOMClient from "react-dom/client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Sections from "./Sections";

const App = () => {
  const [section, setSection] = useState("about");
  const [mode, setMode] = useState("day");
  useEffect(() => {
    if (window.matchMedia) {
      const wantsDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (wantsDarkMode) setMode("night");
    }
  }, []);
  return (
    <div id="content" className={mode}>
      <Header />
      <Menu section={section} setSection={setSection} setMode={setMode} />
      <div id="sections-area">
        <Sections section={section} />
      </div>
      <Footer mode={mode} />
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

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container!);
root.render(<App />);
