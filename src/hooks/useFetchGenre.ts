import { API_KEY, API_TOP_NEWS, GENRE_API, useGlobalContext } from "../context";
import { ArticleType } from "../reducer";

export const useFetchGenre = () => {
  const { dispatch } = useGlobalContext();

  const fetchGenre = async (genre: string) => {
    const genreString = genre.slice(1);
    dispatch({ type: "LOADING", payload: null });
    try {
      const response = await fetch(
        `${GENRE_API}${genreString}&language=en${API_KEY}`
      );
      const data = await response.json();
      const newArray = data.articles;
      const arrayToSave = newArray.map((item: ArticleType) => {
        return { ...item };
      });
      dispatch({ type: "SET_ARTICLES", payload: arrayToSave });
      dispatch({ type: "END_LOADING", payload: null });
    } catch (error) {
      console.log("There was a following error:", error);
      dispatch({ type: "END_LOADING", payload: null });
    }
  };
  const fetchTopNews = async () => {
    dispatch({ type: "LOADING", payload: [] });
    try {
      const response = await fetch(`${API_TOP_NEWS}${API_KEY}`);
      const data = await response.json();
      const newArray = data.articles.splice(0, 16);
      const arrayToSave = newArray.map((item: ArticleType) => {
        return { ...item };
      });
      dispatch({ type: "SET_ARTICLES", payload: arrayToSave });
      dispatch({ type: "END_LOADING", payload: null });
    } catch (error) {
      console.log("There was a following error:", error);
      dispatch({ type: "END_LOADING", payload: null });
    }
  };
  return { fetchGenre, fetchTopNews };
};
