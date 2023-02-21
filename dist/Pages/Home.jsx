"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = require("../context");
const Article_1 = __importDefault(require("../Components/Article"));
const LatestNewsWidget_1 = __importDefault(require("../Components/LatestNewsWidget"));
const hooks_1 = require("../hooks");
const Results = () => {
    const { state } = (0, context_1.useGlobalContext)();
    const { articles } = state;
    const { fetchTopNews } = (0, hooks_1.useFetchGenre)();
    react_1.default.useEffect(() => {
        fetchTopNews();
    }, []);
    return (<div className="results-wrapper">
      <h3 className="results-wrapper-heading">News</h3>
      <div className="results-grid">
        <div className="widget-positioner">
          <LatestNewsWidget_1.default />
        </div>
        {state.loading && <div className="loading-animation"></div>}
        {articles.length > 0 &&
            articles.map((item, index) => {
                return <Article_1.default key={index} {...item}/>;
            })}
        {articles.length < 1 && !state.loading && (<h3>Sorry, we couldn't find any articles.</h3>)}
      </div>
    </div>);
};
exports.default = Results;
