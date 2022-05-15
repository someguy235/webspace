import { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const getRandomLife = (seed) => {
  return Math.floor(Math.random() * seed) === seed - 1;
};

const HeaderSquare = ({ i, t, active }) => {
  return (
    <div
      className={
        "header-grid-square" + (active ? " grid-square-active-" + t : "")
      }
    ></div>
  );
};

const Header = () => {
  const [lifeArray, setLifeArray] = useState([]);

  const ROWS = 5,
    COLS = 100;

  const initLife = () => {
    console.log("initLife()");
    let tempLife = [];
    for (let i = 0; i < ROWS; i++) {
      tempLife.push([]);
      for (let j = 0; j < COLS; j++) {
        tempLife[i].push(getRandomLife(5));
      }
    }
    setLifeArray(() => {
      return tempLife;
    });
  };

  useInterval(() => {
    const newLife = updateLife();
    setLifeArray(() => {
      return newLife;
    });
  }, 1000);

  const checkArea = (x, y, a) => {
    let n = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        let xi = x + i,
          yj = y + j;
        if (xi >= 0 && xi < ROWS && yj >= 0 && yj < COLS) {
          if (a[xi][yj]) n++;
          if (n >= 4) return n;
        }
      }
    }
    return n;
  };

  const updateLife = () => {
    let tempLife = [];
    for (let i = 0; i < ROWS; i++) {
      tempLife.push([]);
      for (let j = 0; j < COLS; j++) {
        const n = checkArea(i, j, lifeArray);
        if (lifeArray[i][j]) {
          tempLife[i][j] = n === 0 || n === 1 || n >= 4 ? false : true;
        } else {
          tempLife[i][j] = n === 3 ? true : false;
        }
      }
    }
    return tempLife;
  };

  useEffect(() => {
    initLife();
  }, []);

  return (
    <div id="header-area">
      <div id="header-grid">
        {lifeArray.map((e, i) =>
          e.map((f, j) => (
            <SwitchTransition key={i + 1 * j + 1} mode="out-in">
              <CSSTransition
                key={i + 1 * j + 1}
                classNames={{
                  enter: "grid-square-active",
                  exit: "grid-square-inactive",
                }}
                timeout={2000}
              >
                <HeaderSquare i={i} t={i % 3} active={f} />
              </CSSTransition>
            </SwitchTransition>
          ))
        )}
      </div>
      <div id="header-content">
        <div className="name">Ethan Shepherd</div>
        <div className="subname">software developer</div>
      </div>
      <button className="life-init-button" onClick={initLife}>
        reset
      </button>
    </div>
  );
};

export default Header;
