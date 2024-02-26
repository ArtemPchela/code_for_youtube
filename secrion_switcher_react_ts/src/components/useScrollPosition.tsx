import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useEffect,
} from "react";

type ScrollPosition = {
  ref: RefObject<HTMLElement> | null;
  distance: number;
};

export const useScrollPosition = (
  storyRef: MutableRefObject<RefObject<HTMLElement>[]>,
  setCurrentIndex: Dispatch<SetStateAction<number>>,
) => {
  useEffect(() => {
    const handleScroll = () => {
      const closesStory = storyRef.current.reduce<ScrollPosition>(
        (closest, ref) => {
          if (ref.current) {
            const distance = Math.abs(ref.current.getBoundingClientRect().top);
            return distance < closest.distance ? { ref, distance } : closest;
          }
          return closest;
        },
        { ref: null, distance: Infinity },
      );

      const index = storyRef.current.findIndex(
        (item) => item === closesStory.ref,
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [storyRef, setCurrentIndex]);
};
