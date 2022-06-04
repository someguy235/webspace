const Footer = ({ mode, setMode }) => {
  const handleMode = () => {
    setMode((p) => {
      return p === "day" ? "night" : "day";
    });
  };
  return (
    <footer id="footer-area">
      <div id="footer-left-day" style={{ opacity: mode === "day" ? 1 : 0 }}>
        <div className="desert-sky"></div>
        <div className="desert-ground-lighter"></div>
        <div className="desert-ground-light"></div>
        <div className="desert-ground-dark"></div>
        <div className="desert-ground-darker"></div>
      </div>
      <div id="footer-left-night" style={{ opacity: mode === "day" ? 0 : 1 }}>
        <div className="desert-sky"></div>
        <div className="desert-ground-lighter"></div>
        <div className="desert-ground-light"></div>
        <div className="desert-ground-dark"></div>
        <div className="desert-ground-darker"></div>
      </div>
      <div id="day-night-toggle-container">
        <button id="day-night-toggle" onClick={handleMode}>
          <div id="day-toggle"></div>
          <div id="night-toggle"></div>
        </button>
      </div>
      <div style={{ opacity: mode === "day" ? 1 : 0 }} id="day-ground"></div>
      <div style={{ opacity: mode === "day" ? 0 : 1 }} id="night-ground"></div>
      <div id="footer-right-day" style={{ opacity: mode === "day" ? 1 : 0 }}>
        <div className="desert-sky"></div>
        <div className="desert-ground-lighter"></div>
        <div className="desert-ground-light"></div>
        <div className="desert-ground-dark"></div>
        <div className="desert-ground-darker"></div>
      </div>
      <div id="footer-right-night" style={{ opacity: mode === "day" ? 0 : 1 }}>
        <div className="desert-sky"></div>
        <div className="desert-ground-lighter"></div>
        <div className="desert-ground-light"></div>
        <div className="desert-ground-dark"></div>
        <div className="desert-ground-darker"></div>
      </div>
    </footer>
  );
};

export default Footer;
