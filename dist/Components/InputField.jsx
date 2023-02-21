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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Search_svg_1 = require("../Assets/Search.svg");
const context_1 = require("../context");
const context_2 = require("../context");
const API_CUSTOM_SEARCH = "https://newsapi.org/v2/everything?q=";
const InputField = () => {
    const { dispatch } = (0, context_1.useGlobalContext)();
    const [search, setSearch] = (0, react_1.useState)("");
    const fetchSearchTerm = () => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: "LOADING", payload: null });
        dispatch({ type: "SET_SEARCH_TERM", payload: search });
        try {
            const response = yield fetch(`${API_CUSTOM_SEARCH}${search}&language=en${context_2.API_KEY}`);
            const data = yield response.json();
            if (data.totalResults > 0) {
                const newArray = data.articles.splice(0, 16);
                dispatch({ type: "SET_ARTICLES", payload: newArray });
                setSearch("");
                dispatch({ type: "END_LOADING", payload: null });
            }
            else {
                dispatch({ type: "SET_ARTICLES", payload: [] });
                setSearch("");
            }
        }
        catch (error) {
            console.log("There was a following error:", error);
        }
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearchTerm();
    };
    return (<section className="input-wrapper">
      <div className="search-icon-wrapper">
        <Search_svg_1.ReactComponent className="icon"/>
      </div>
      <form onSubmit={handleSubmit}>
        <input value={search} type="text" className="input" placeholder="Search news" onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <div className="button-BG">
          <button type="submit">SEARCH</button>
        </div>
      </form>
    </section>);
};
exports.default = InputField;
