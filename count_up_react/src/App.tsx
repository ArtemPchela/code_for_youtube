import Title from "./Title.tsx";
import { useEffect, useState } from "react";
import Counter from "./components/Counter.tsx";

interface CounterObject {
  id: number;
  title: string;
  limit: number;
  name: string;
  phone: string;
}

function App() {
  const [newData, setNewData] = useState<CounterObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setNewData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Title />
      <div className={"cards"}>
        {newData.map((item) => (
          <div className={"card"}>
            <div className={"card_wrapper"}>
              <div className={"card_title"}>{item.name}</div>
              <Counter limit={item.phone} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
