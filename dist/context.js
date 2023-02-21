"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = exports.AppProvider = exports.useGlobalContext = exports.InitialState = exports.API_TOP_NEWS = exports.GENRE_API = exports.API_KEY = void 0;
const react_1 = __importStar(require("react"));
const reducer_1 = __importDefault(require("../src/reducer"));
exports.API_KEY = "&apiKey=729617acc58648f7af02f88360f729bf";
exports.GENRE_API = "https://newsapi.org/v2/top-headlines?category=";
exports.API_TOP_NEWS = "https://newsapi.org/v2/top-headlines?language=en&category=entertainment";
exports.InitialState = {
    articles: [],
    favorites: [],
    searchTerm: "",
    genre: "",
    modalOpen: false,
    loading: false,
};
const AppContext = (0, react_1.createContext)({
    state: exports.InitialState,
    dispatch: () => undefined,
});
exports.AppContext = AppContext;
const AppProvider = ({ children }) => {
    const [state, dispatch] = (0, react_1.useReducer)(reducer_1.default, exports.InitialState);
    const getLocalStorage = () => {
        let list = JSON.parse(localStorage.getItem("favorites") || "");
        if (list.length > 0) {
            dispatch({ type: "RETRIEVE_FAVORITES", payload: list });
        }
        else
            return;
    };
    (0, react_1.useEffect)(() => {
        getLocalStorage();
    }, []);
    return (<AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>);
};
exports.AppProvider = AppProvider;
const useGlobalContext = () => {
    return (0, react_1.useContext)(AppContext);
};
exports.useGlobalContext = useGlobalContext;
