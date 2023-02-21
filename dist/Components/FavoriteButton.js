"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const FavoriteButton = (props) => {
    const { state, dispatch } = (0, context_1.useGlobalContext)();
    const updateFavorite = (favArticle) => {
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
        }
        else {
            dispatch({ type: "ADD_FAVORITE", payload: favArticle });
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    };
    const checkFavorite = (articleTitle) => {
        return state.favorites.some((item) => {
            return item.title === articleTitle;
        });
    };
    return (<button className={checkFavorite(props.data.title) ? "button-remove" : "button-add"} onClick={() => updateFavorite(props.data)}>
      {checkFavorite(props.data.title) ? "Unfavorite" : "Favorite"}
    </button>);
};
exports.default = FavoriteButton;
