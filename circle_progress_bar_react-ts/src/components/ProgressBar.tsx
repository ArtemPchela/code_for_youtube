import { useEffect, useState } from "react";

const SIZE = 150;
const STROKE_WIDTH = 15;

const ProgressBar = () => {
  const [progressCircle, setProgressCircle] = useState(0);

  const radius = (SIZE - STROKE_WIDTH) / 2;
  const circumference = radius * 2 * Math.PI;

  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset =
    circumference - (progressCircle / 100) * circumference;

  useEffect(() => {
    const updateProgress = () => {
      const scrollFromTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight = document.documentElement.scrollHeight;

      const clientHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const windowHeight = scrollHeight - clientHeight;

      const progress =
        windowHeight === 0 ? 100 : (scrollFromTop / windowHeight) * 100;

      setProgressCircle(progress);
    };

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  });

  const stroke: string = `${
    progressCircle < 15 ? "red" : progressCircle > 45 ? "green" : "yellow"
  }`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        // transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: SIZE,
          height: SIZE,
          transition: "background 5s ease-in-out",
        }}
      >
        <svg width={SIZE} height={SIZE} style={{ transform: "rotate(-90deg)" }}>
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={STROKE_WIDTH}
            r={radius}
            cx={SIZE / 2}
            cy={SIZE / 2}
          />
          <circle
            stroke={stroke}
            fill="transparent"
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke 0.5s ease-out" }}
            r={radius}
            cx={SIZE / 2}
            cy={SIZE / 2}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          {Math.round(progressCircle)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
