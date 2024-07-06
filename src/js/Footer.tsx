import Moon from "./Moon";
import Sun from "./Sun";

type FooterParams = {
  mode: string;
};
const Footer = ({ mode }: FooterParams) => {
  return (
    <footer id="footer-area">
      <div
        className="footer-left footer-side-day"
        style={{ opacity: mode === "day" ? 1 : 0 }}
      >
        <div></div>
        <div className="footer-ground">
          <div className="desert-sky"></div>
          <div className="desert-ground-lighter"></div>
          <div className="desert-ground-light"></div>
          <div className="desert-ground-dark"></div>
          <div className="desert-ground-darker"></div>
        </div>
      </div>
      <div
        className="footer-left footer-side-night"
        style={{ opacity: mode === "day" ? 0 : 1 }}
      >
        <div></div>
        <div className="footer-ground">
          <div className="desert-sky"></div>
          <div className="desert-ground-lighter"></div>
          <div className="desert-ground-light"></div>
          <div className="desert-ground-dark"></div>
          <div className="desert-ground-darker"></div>
        </div>
      </div>
      <div style={{ opacity: mode === "day" ? 1 : 0 }} id="day-ground">
        <Sun />
      </div>
      <div style={{ opacity: mode === "day" ? 0 : 1 }} id="night-ground">
        <Moon />
      </div>
      <div
        className="footer-right footer-side-day"
        style={{ opacity: mode === "day" ? 1 : 0 }}
      >
        <div></div>
        <div className="footer-ground">
          <div className="desert-sky"></div>
          <div className="desert-ground-lighter"></div>
          <div className="desert-ground-light"></div>
          <div className="desert-ground-dark"></div>
          <div className="desert-ground-darker"></div>
        </div>
      </div>
      <div
        className="footer-right footer-side-night"
        style={{ opacity: mode === "day" ? 0 : 1 }}
      >
        <div></div>
        <div className="footer-ground">
          <div className="desert-sky"></div>
          <div className="desert-ground-lighter"></div>
          <div className="desert-ground-light"></div>
          <div className="desert-ground-dark"></div>
          <div className="desert-ground-darker"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
