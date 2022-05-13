import { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const HeaderSquare = ({ i, t, active }) => {
  return (
    <div
      className={
        "header-grid-square grid-square-" +
        i +
        (active ? " grid-square-active-" + t : "")
      }
    ></div>
  );
};

const Header = () => {
  const SQ_COUNT = 200;
  const [active, setActive] = useState([]);

  const startHeaderEffect = () => {
    setInterval(() => {
      const newActive = getRandom(SQ_COUNT);
      setActive((a) => {
        if (a.includes(newActive)) {
          return a.filter((item) => item !== newActive);
        } else {
          return [...a, newActive];
        }
      });
    }, 1000);
  };

  useEffect(() => {
    startHeaderEffect();
  }, []);

  const gridArray = [...Array(SQ_COUNT)];

  return (
    <div id="header-area">
      <div id="header-grid">
        {gridArray.map((e, i) => (
          <SwitchTransition key={i} mode="out-in">
            <CSSTransition
              key={active.includes(i)}
              classNames={{
                enter: "grid-square-active",
                exit: "grid-square-inactive",
              }}
              timeout={2000}
            >
              <HeaderSquare i={i} t={i % 3} active={active.includes(i)} />
            </CSSTransition>
          </SwitchTransition>
        ))}
      </div>
      <div id="header-content">
        <div className="name">Ethan Shepherd</div>
        <div className="subname">software developer</div>
      </div>
    </div>
  );
};

export default Header;
