import { InitialState } from "./context";

export type ArticleType = {
  articleID: number;
  title: string;
  genre: string;
  publishedAt: string;
  urlToImage: string;
  author: string;
  source: { id: number; name: string };
};

export type StateType = {
  articles: ArticleType[];
  favorites: ArticleType[];
  searchTerm: string;
  genre: string;
  modalOpen: boolean;
  loading: boolean;
};

export type StateActionType = {
  type: string;
  payload: ArticleType[] | any;
};

const reducer = (
  state: StateType = InitialState,
  action: StateActionType
): StateType => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "END_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "SET_ARTICLES") {
    return { ...state, articles: action.payload, loading: false };
  }
  if (action.type === "SET_SEARCH_TERM") {
    return { ...state, loading: true, searchTerm: action.payload };
  }
  if (action.type === "ADD_FAVORITE") {
    return { ...state, favorites: [...state.favorites, action.payload] };
  }
  if (action.type === "REMOVE_FAVORITE") {
    return { ...state, favorites: action.payload };
  }
  if (action.type === "RETRIEVE_FAVORITES") {
    return { ...state, favorites: [...action.payload] };
  }

  if (action.type === "TOGGLE_MODAL") {
    return { ...state, modalOpen: !state.modalOpen };
  }

  return state;
};

export default reducer;
