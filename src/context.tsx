import React, { useContext, useReducer, createContext, useEffect } from "react";
import reducer, { StateType, StateActionType } from "../src/reducer";

export const API_KEY = "&apiKey=729617acc58648f7af02f88360f729bf";
export const GENRE_API = "https://newsapi.org/v2/top-headlines?category=";

export const API_TOP_NEWS =
  "https://newsapi.org/v2/top-headlines?language=en&category=entertainment";

export const InitialState: StateType = {
  articles: [],
  favorites: [],
  searchTerm: "",
  genre: "",
  modalOpen: false,
  loading: false,
};

export type myContextType = {
  state: StateType;
  dispatch: React.Dispatch<StateActionType>;
};

const AppContext = createContext<myContextType>({
  state: InitialState,
  dispatch: () => undefined,
});

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const getLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem("favorites") || "");

    if (list.length > 0) {
      dispatch({ type: "RETRIEVE_FAVORITES", payload: list });
    } else return;
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
