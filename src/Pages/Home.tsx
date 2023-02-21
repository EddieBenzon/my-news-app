import React from "react";
import { useGlobalContext } from "../context";
import Article from "../Components/Article";
import LatestNewsWidget from "../Components/LatestNewsWidget";
import { useFetchGenre } from "../hooks";

const Results = () => {
  const { state } = useGlobalContext();
  const { articles } = state;

  const { fetchTopNews } = useFetchGenre();

  React.useEffect(() => {
    fetchTopNews();
  }, []);

  return (
    <div className="results-wrapper">
      <h3 className="results-wrapper-heading">News</h3>
      <div className="results-grid">
        <div className="widget-positioner">
          <LatestNewsWidget />
        </div>
        {state.loading && <div className="loading-animation"></div>}
        {articles.length > 0 &&
          articles.map((item, index) => {
            return <Article key={index} {...item} />;
          })}
        {articles.length < 1 && !state.loading && (
          <h3>Sorry, we couldn't find any articles.</h3>
        )}
      </div>
    </div>
  );
};

export default Results;
