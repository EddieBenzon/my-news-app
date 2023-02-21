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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Article_1 = __importDefault(require("../Components/Article"));
const context_1 = require("../context");
const useFetchGenre_1 = require("../hooks/useFetchGenre");
const BusinessPage = () => {
    const { state } = (0, context_1.useGlobalContext)();
    const { articles } = state;
    const params = (0, react_router_dom_1.useLocation)();
    const { fetchGenre } = (0, useFetchGenre_1.useFetchGenre)();
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
exports.default = BusinessPage;
