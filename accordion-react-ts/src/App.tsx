import Accordion from "./components/Accordion.tsx";
import { accordion } from "./data/accordion.ts";

function App() {
  return (
    <>
      <div className={"title"}>
        <h1>FAQ</h1>
        <h2>Accordion with dynamic height</h2>
      </div>
      <div className={"accordion_wrapper"}>
        {accordion.map((item) => (
          <Accordion item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default App;
