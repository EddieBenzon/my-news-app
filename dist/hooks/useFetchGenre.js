"use strict";
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
exports.useFetchGenre = void 0;
const context_1 = require("../context");
const useFetchGenre = () => {
    const { dispatch } = (0, context_1.useGlobalContext)();
    const fetchGenre = (genre) => __awaiter(void 0, void 0, void 0, function* () {
        const genreString = genre.slice(1);
        dispatch({ type: "LOADING", payload: null });
        try {
            const response = yield fetch(`${context_1.GENRE_API}${genreString}&language=en${context_1.API_KEY}`);
            const data = yield response.json();
            const newArray = data.articles;
            const arrayToSave = newArray.map((item) => {
                return Object.assign({}, item);
            });
            dispatch({ type: "SET_ARTICLES", payload: arrayToSave });
            dispatch({ type: "END_LOADING", payload: null });
        }
        catch (error) {
            console.log("There was a following error:", error);
            dispatch({ type: "END_LOADING", payload: null });
        }
    });
    const fetchTopNews = () => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: "LOADING", payload: [] });
        try {
            const response = yield fetch(`${context_1.API_TOP_NEWS}${context_1.API_KEY}`);
            const data = yield response.json();
            const newArray = data.articles.splice(0, 16);
            const arrayToSave = newArray.map((item) => {
                return Object.assign({}, item);
            });
            dispatch({ type: "SET_ARTICLES", payload: arrayToSave });
            dispatch({ type: "END_LOADING", payload: null });
        }
        catch (error) {
            console.log("There was a following error:", error);
            dispatch({ type: "END_LOADING", payload: null });
        }
    });
    return { fetchGenre, fetchTopNews };
};
exports.useFetchGenre = useFetchGenre;
