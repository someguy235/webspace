import { useEffect, useRef, useState } from "react";
import play from "url:../img/controls/play.png";
import play_night from "url:../img/controls/play-night.png";
import pause from "url:../img/controls/pause.png";
import pause_night from "url:../img/controls/pause-night.png";
import reset from "url:../img/controls/reset.png";
import reset_night from "url:../img/controls/reset-night.png";

import Star from "./Star";

function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const getRandomLife = (seed: number) => {
  return Math.floor(Math.random() * seed) === seed - 1;
};

type HeaderSquareParams = {
  i: number;
  active: boolean;
};
const HeaderSquare = ({ i, active }: HeaderSquareParams) => {
  // const scale = Math.max(Math.random() * 0.2, 0.1);
  const scale = 0.2;
  return (
    <div
      className={
        "header-grid-square" + (active ? " header-grid-square-active" : "")
      }
    >
      <Star scale={scale} xPos={"0"} yPos={"0"} index={i} />
    </div>
  );
};

const Header = () => {
  const [lifeArray, setLifeArray] = useState<boolean[][]>([]);
  const [lifeIsRunning, setLifeIsRunning] = useState(false);

  const ROWS = 5,
    COLS = 100;

  const initLife = () => {
    let tempLife: boolean[][] = [];
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

  useInterval(
    () => {
      const newLife = updateLife();
      setLifeArray(() => {
        return newLife;
      });
    },
    lifeIsRunning ? 300 : null
  );

  const checkArea = (x: number, y: number, a: boolean[][]) => {
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
    let tempLife: boolean[][] = [];
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
    <header id="header-area">
      <div id="header-grid">
        {lifeArray.map((e, i) =>
          e.map((f, j) => (
            <HeaderSquare
              i={(i + 1 * j + 1) % 4}
              active={f}
              key={i + 1 * j + 1}
            />
          ))
        )}
      </div>
      <div id="header-content-container">
        <div id="header-content-inner">
          <div id="header-content">
            <div className="name">Ethan Shepherd</div>
            <div className="subname">software developer</div>
          </div>
        </div>
        <div id="life-button-container">
          <button
            className={"life-play-button " + (lifeIsRunning ? "pause" : "play")}
            onClick={() => setLifeIsRunning(!lifeIsRunning)}
            aria-label="play/pause game of life"
          >
            <div className="play-button-container">
              <div className="life-icon">
                <img src={play} alt="play button" />
              </div>
              <div className="life-icon-night">
                <img src={play_night} alt="play button at night" />
              </div>
            </div>
            <div className="pause-button-container">
              <div className="life-icon">
                <img src={pause} alt="pause button" />
              </div>
              <div className="life-icon-night">
                <img src={pause_night} alt="pause button at night" />
              </div>
            </div>
          </button>
          <button
            className="life-reset-button"
            onClick={initLife}
            aria-label="reset game of life"
          >
            <div className="reset-button-container">
              <div className="life-icon">
                <img src={reset} alt="reset button" />
              </div>
              <div className="life-icon-night">
                <img src={reset_night} alt="reset button at night" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
