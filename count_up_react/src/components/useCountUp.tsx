import { RefObject, useEffect, useState } from "react";

export const useCountUp = (
  limit: number | string,
  ref: RefObject<HTMLDivElement>,
) => {
  const [counterValue, setCounterValue] = useState(0);

  const numericLimit: number =
    typeof limit === "string" ? parseInt(limit, 10) : Number(limit);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting && currentRef) {
          // setCounterValue(0);
          const interval = setInterval(() => {
            setCounterValue((prevValue) =>
              prevValue < numericLimit ? prevValue + 1 : prevValue,
            );
          }, 100);

          return () => {
            clearInterval(interval);
            if (currentRef) {
              observer.unobserve(currentRef);
            }
          };
        }
      },
      { threshold: 1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, numericLimit]);
  return { ref, counterValue };
};
