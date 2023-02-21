"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Article_1 = __importDefault(require("../Components/Article"));
const context_1 = require("../context");
const useFetchGenre_1 = require("../hooks/useFetchGenre");
const Favorites = () => {
    const { state } = (0, context_1.useGlobalContext)();
    const { favorites } = state;
    const params = (0, react_router_dom_1.useLocation)();
    const { fetchGenre } = (0, useFetchGenre_1.useFetchGenre)();
    react_1.default.useEffect(() => {
        fetchGenre(params.pathname);
    }, [params.pathname]);
    return (<div className="results-wrapper">
      <h3 className="favorites-heading">
        {favorites.length > 0
            ? "Your Favorite Articles"
            : "You haven't added any favorite articles yet."}
      </h3>
      <div className="results-grid">
        {favorites.length > 0 &&
            favorites.map((item, index) => {
                return <Article_1.default key={index} {...item}/>;
            })}
        {state.loading && <div className="loading-animation"></div>}
      </div>
    </div>);
};
exports.default = Favorites;
