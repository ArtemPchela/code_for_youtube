import { useEffect, useRef, useState } from "react";

type AccordionProps = {
  item: {
    id: number | string;
    name: string;
    description: string;
    link: string;
  };
};

const Accordion = ({ item }: AccordionProps) => {
  const { name, description, link } = item;
  const [accordionOpen, setAccrodionOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = accordionOpen
        ? `${contentRef.current?.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, accordionOpen]);

  const toggleAccordion = () => setAccrodionOpen(!accordionOpen);

  return (
    <div className={`accordion`}>
      <div className={"accordion_header"} onClick={toggleAccordion}>
        <span className={"accordion_title"}>{name}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 4H1" stroke="black" strokeLinecap="round" />
          <path
            d="M4.01329 6.99999L4 1"
            stroke="black"
            strokeLinecap="round"
            style={{
              transformOrigin: "center",
              // transform: `rotate(${accordionOpen ? "90deg" : "0deg"})`,
              transform: `translateY(${accordionOpen ? "100%" : "0"})`,
              transition: "transform 0.9s ease-in-out",
            }}
          />
        </svg>
      </div>
      <div className={"accordion_content"} ref={contentRef}>
        <div className={"accordion_content-text"}>
          {description}
          <a href={link} target="_blank" referrerPolicy="no-referrer">
            <p>Link to the source</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
