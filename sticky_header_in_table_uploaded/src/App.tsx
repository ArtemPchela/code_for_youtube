import ContentStart from "./components/ContentStart.tsx";
import ContentEnd from "./components/ContentEnd.tsx";
import Table from "./components/Table.tsx";

function App() {
  return (
    <div className={"content_wrapper"}>
      <ContentStart />
      <Table />
      <ContentEnd />
    </div>
  );
}

export default App;
