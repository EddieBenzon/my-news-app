"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const context_1 = require("../context");
const Article_1 = __importDefault(require("../Components/Article"));
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../hooks/");
const HealthPage = () => {
    const { state } = (0, context_1.useGlobalContext)();
    const { articles } = state;
    const params = (0, react_router_dom_1.useLocation)();
    const { fetchGenre } = (0, hooks_1.useFetchGenre)();
    (0, react_1.useEffect)(() => {
        fetchGenre(params.pathname);
    }, [params.pathname]);
    return (<div className="results-wrapper">
      <h3 className="results-wrapper-heading">News</h3>
      <div className="results-grid">
        {articles.map((item, index) => {
            return <Article_1.default key={index} {...item}/>;
        })}
        {state.loading && <div className="loading-animation"></div>}
        {articles.length < 1 && <h3>Sorry, we couldn't find any articles.</h3>}
      </div>
    </div>);
};
exports.default = HealthPage;
