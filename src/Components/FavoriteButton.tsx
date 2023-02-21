import { useGlobalContext } from "../context";
import { ArticleType } from "../reducer";

type buttonType = {
  data: ArticleType;
};

const FavoriteButton = (props: buttonType) => {
  const { state, dispatch } = useGlobalContext();

  const updateFavorite = (favArticle: any) => {
    const isFavorite = state.favorites.some((item) => {
      return item.title === favArticle.title;
    });

    if (isFavorite) {
      const newFavorites = state.favorites.filter((item) => {
        return item.title !== favArticle.title;
      });
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      dispatch({ type: "REMOVE_FAVORITE", payload: newFavorites });
      return;
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: favArticle });
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }
  };

  const checkFavorite = (articleTitle: string) => {
    return state.favorites.some((item) => {
      return item.title === articleTitle;
    });
  };

  return (
    <button
      className={
        checkFavorite(props.data.title) ? "button-remove" : "button-add"
      }
      onClick={() => updateFavorite(props.data)}
    >
      {checkFavorite(props.data.title) ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
