const Footer = ({ mode }) => {
  return (
    <footer id="footer-area">
      <div style={{ opacity: mode === "day" ? 1 : 0 }} id="day-ground"></div>
      <div style={{ opacity: mode === "day" ? 0 : 1 }} id="night-ground"></div>
    </footer>
  );
};

export default Footer;
