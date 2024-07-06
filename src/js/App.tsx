import * as ReactDOMClient from "react-dom/client";
import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Sections from "./Sections";
import Star from "./Star";

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

  const getStars = () => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < 50; i++) {
      const scale = Math.max(0.25, Math.random()) * 0.25;
      const xPos = Math.floor(Math.random() * w) + "px";
      const yPos = Math.floor(Math.random() * h) + 100 + "px";
      stars.push(
        <Star key={i} scale={scale} xPos={xPos} yPos={yPos} index={-1} />
      );
    }
    return stars;
  };

  const w = window.innerWidth - 30;
  const h = window.innerHeight - 230;
  const stars = useMemo(getStars, []);

  return (
    <div id="content" className={mode}>
      <Header />
      <Menu section={section} setSection={setSection} setMode={setMode} />
      <div id="sections-area">
        <Sections section={section} mode={mode} />
      </div>
      <Footer mode={mode} />
      <div id="day-sky-container">
        <div id="day-sky-grid-container">
          <div style={{ opacity: mode === "day" ? 1 : 0 }} id="day-sky"></div>
        </div>
      </div>
      <div id="night-sky-container">
        <div id="night-sky-grid-container">
          <div style={{ opacity: mode === "day" ? 0 : 1 }} id="night-sky">
            <div id="stars">{stars.map((star) => star)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container!);
root.render(<App />);
