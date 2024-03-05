type WpmProps = {
  text: string;
  wpm?: number;
};

const WpmCalculator = ({ text, wpm = 150 }: WpmProps) => {
  const wordsCount = text.split(/\s+/).length;

  const readingTimeMinutes = wordsCount / wpm;

  const formattedReadingTime = Math.ceil(readingTimeMinutes);
  return (
    <>
      <span className={"time"}>{formattedReadingTime}</span> minute
      {formattedReadingTime === 1 ? "" : "s"} read
    </>
  );
};

export default WpmCalculator;
