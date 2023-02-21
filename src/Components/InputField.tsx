import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../Assets/Search.svg";
import { useGlobalContext } from "../context";
import { API_KEY } from "../context";

const API_CUSTOM_SEARCH: string = "https://newsapi.org/v2/everything?q=";

const InputField = () => {
  const { dispatch } = useGlobalContext();
  const [search, setSearch] = useState<string>("");

  const fetchSearchTerm = async () => {
    dispatch({ type: "LOADING", payload: null });
    dispatch({ type: "SET_SEARCH_TERM", payload: search });
    try {
      const response = await fetch(
        `${API_CUSTOM_SEARCH}${search}&language=en${API_KEY}`
      );
      const data = await response.json();
      if (data.totalResults > 0) {
        const newArray = data.articles.splice(0, 16);
        dispatch({ type: "SET_ARTICLES", payload: newArray });
        setSearch("");
        dispatch({ type: "END_LOADING", payload: null });
      } else {
        dispatch({ type: "SET_ARTICLES", payload: [] });
        setSearch("");
      }
    } catch (error) {
      console.log("There was a following error:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchSearchTerm();
  };

  return (
    <section className="input-wrapper">
      <div className="search-icon-wrapper">
        <SearchIcon className="icon" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          type="text"
          className="input"
          placeholder="Search news"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="button-BG">
          <button type="submit">SEARCH</button>
        </div>
      </form>
    </section>
  );
};

export default InputField;
