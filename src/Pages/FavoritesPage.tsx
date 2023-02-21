import React from "react";
import { useLocation } from "react-router-dom";
import Article from "../Components/Article";
import { useGlobalContext } from "../context";
import { useFetchGenre } from "../hooks/useFetchGenre";

const Favorites = () => {
  const { state } = useGlobalContext();
  const { favorites } = state;

  const params = useLocation();

  const { fetchGenre } = useFetchGenre();

  React.useEffect(() => {
    fetchGenre(params.pathname);
  }, [params.pathname]);

  return (
    <div className="results-wrapper">
      <h3 className="favorites-heading">
        {favorites.length > 0
          ? "Your Favorite Articles"
          : "You haven't added any favorite articles yet."}
      </h3>
      <div className="results-grid">
        {favorites.length > 0 &&
          favorites.map((item, index) => {
            return <Article key={index} {...item} />;
          })}
        {state.loading && <div className="loading-animation"></div>}
      </div>
    </div>
  );
};

export default Favorites;
