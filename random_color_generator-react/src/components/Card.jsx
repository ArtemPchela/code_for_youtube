import { getRandomColor } from "../helpers/randomColorGenerator.js";

const Card = ({ item }) => {
  return (
    <div className="card" style={{ "--background-color": getRandomColor() }}>
      <img src={item.picture.large} alt="" />
      <h3 className="name">
        {item.name.first} {item.name.last}
      </h3>
    </div>
  );
};

export default Card;
