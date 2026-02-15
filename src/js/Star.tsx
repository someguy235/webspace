type StarProps = {
  scale: number;
  xPos: string;
  yPos: string;
  index: number;
};
const Star = ({ scale, xPos, yPos, index }: StarProps) => {
  const fillColors = [
    "hsl(173, 80%, 54%)",
    "hsl(323, 64%, 77%)",
    "hsl(272, 100%, 78%)",
    "hsl(49, 87%, 70%)",
  ];
  const borderColors = [
    "hsl(173, 50%, 54%)",
    "hsl(323, 34%, 64%)",
    "hsl(272,70%, 68%)",
    "hsl(49,57%, 60%)",
  ];
  const colorNames = ["turquoise", "pink", "lavendar", "jasmine"];

  const colorIdx =
    index !== -1
      ? index % fillColors.length
      : Math.floor(Math.random() * fillColors.length);
  const xyScale = 100 * scale;

  return (
    <div
      style={{ top: yPos, left: xPos }}
      className={`star star-${colorNames[colorIdx]}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={xyScale}
        height={xyScale}
        style={{ display: "block" }}
      >
        <g transform={`scale(${scale}) translate(5 5)`}>
          <path
            d="m 45 0 c 5 25 20 40 45 45 c -25 5 -40 20 -45 45 c -5 -25 -20 -40 -45 -45 c 25 -5 40 -20 45 -45"
            stroke={`${borderColors[colorIdx]}`}
            strokeWidth="3"
            fill={`${fillColors[colorIdx]}`}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Star;
