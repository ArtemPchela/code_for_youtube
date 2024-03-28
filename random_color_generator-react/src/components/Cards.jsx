import { useEffect, useState } from "react";
import Card from "./Card.jsx";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newFetch = await fetch(
          "https://api.randomuser.me/?nat=US&results=50",
        );
        const response = await newFetch.json();

        setData(response.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="cards">
      {data.map((item) => (
        <Card key={item.login.uuid} item={item} />
      ))}
    </div>
  );
};

export default Cards;
