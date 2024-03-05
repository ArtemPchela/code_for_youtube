import articleData from "./data/articleData.json";
import WpmCalculator from "./components/WpmCalculator.tsx";

function App() {
  return (
    <>
      <h1 className={"head"}>Words per minute calculator</h1>
      <div className={"articles_wrapper"}>
        {articleData.map((art) => (
          <div className={"article"} key={art.title}>
            <div className={"article_title"}>{art.title}</div>
            <div className={"article_author"}>
              <div className={"author_name"}>{art.author}</div>
              <div className={"author_read"}>
                <WpmCalculator text={art.content} />
              </div>
            </div>
            <div className={"article_content"}>{art.content}</div>
            <div className={"article_publication"}>{art.publication_date}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
