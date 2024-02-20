import { useRef } from "react";
import { useCountUp } from "./useCountUp.tsx";

const Counter = ({ limit }: { limit: number | string }) => {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const { counterValue } = useCountUp(limit, counterRef);

  return (
    <div ref={counterRef} className={"amount"}>
      {counterValue}
    </div>
  );
};

export default Counter;
