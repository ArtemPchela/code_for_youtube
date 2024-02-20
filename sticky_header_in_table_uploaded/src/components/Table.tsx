import { useEffect, useRef, useState } from "react";
import newData from "../../public/data.json";
import "../styles/table.css";

interface TableData {
  name: string;
  age: number;
  gender: string;
  income: number;
  profession: string;
}

const Table = () => {
  const [isSticky, setIsSticky] = useState(false);
  const theadRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (theadRef.current) {
        const rect = theadRef.current.getBoundingClientRect();

        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <table>
      <thead ref={theadRef} className={isSticky ? "sticky" : ""}>
        {newData.length > 0 &&
          Object.keys(newData[0]).map((title) => <th key={title}>{title}</th>)}
      </thead>

      <tbody>
        {newData.length > 0 &&
          newData.map((item: TableData) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.profession}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
