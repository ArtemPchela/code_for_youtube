import Cards from "./components/Cards.tsx";
import CardsModalReusable from "./components/CardsModalReusable.tsx";

function App() {
  return (
    <>
      <h1>Multiple modal windows with React / useQuery / TypeScript🎆</h1>
      <h2>💖CatWebDev greeting you🔥</h2>
      <h2 className={"modal_variant"}>Cards with modal</h2>
      <Cards />
      <h2 className={"modal_variant"}>Cards with reusable modal</h2>
      <CardsModalReusable />
    </>
  );
}

export default App;
