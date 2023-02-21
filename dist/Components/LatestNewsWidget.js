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
const context_1 = require("../context");
const API_LATEST_NEWS = "https://newsapi.org/v2/top-headlines?language=en&pageSize=10&page=";
const LatestNewsWidget = () => {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [latest, setLatest] = (0, react_1.useState)([]);
    const [pageNumber, setPageNumber] = (0, react_1.useState)(1);
    const fetchLatestNews = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            const response = yield fetch(`${API_LATEST_NEWS}${pageNumber.toString()}${context_1.API_KEY}`);
            const data = yield response.json();
            const newArray = data.articles;
            setLatest([...latest, ...newArray]);
            setLoading(false);
        }
        catch (error) {
            console.log("There was a following error:", error);
            setLoading(false);
        }
    });
    const handleScroll = (event) => {
        if (event.currentTarget.clientHeight + event.currentTarget.scrollTop + 1 >=
            event.currentTarget.scrollHeight) {
            setPageNumber((prev) => prev + 1);
        }
    };
    (0, react_1.useEffect)(() => {
        fetchLatestNews();
    }, [pageNumber]);
    const convertDate = (time) => {
        const newDate = new Date(time);
        return newDate.toLocaleTimeString();
    };
    return (<div className="latest-news-wrapper">
      <div className="title-container">
        <span className="circle-outer">
          <span className="circle-inner"></span>
        </span>
        Latest News
      </div>

      <div className="scroller-container" onScroll={handleScroll}>
        {latest.map((item, index) => {
            return (<div key={index} className="single-latest-card">
              <p>{convertDate(item.publishedAt)}</p>
              <h3>{item.title}</h3>
            </div>);
        })}
        {loading && <div className="loading-animation"></div>}
      </div>
      <div className="footer-container">
        <p>See all news</p> <span></span>
      </div>
    </div>);
};
exports.default = LatestNewsWidget;
