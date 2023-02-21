import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Article from "../Components/Article";
import { useGlobalContext } from "../context";
import { useFetchGenre } from "../hooks/useFetchGenre";

const BusinessPage = () => {
  const { state } = useGlobalContext();
  const { articles } = state;

  const params = useLocation();

  const { fetchGenre } = useFetchGenre();

  useEffect(() => {
    fetchGenre(params.pathname);
  }, [params.pathname]);

  return (
    <div className="results-wrapper">
      <h3 className="results-wrapper-heading">News</h3>
      <div className="results-grid">
        {articles.map((item, index) => {
          return <Article key={index} {...item} />;
        })}
        {state.loading && <div className="loading-animation"></div>}
        {articles.length < 1 && <h3>Sorry, we couldn't find any articles.</h3>}
      </div>
    </div>
  );
};

export default BusinessPage;
