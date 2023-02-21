"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const reducer = (state = context_1.InitialState, action) => {
    if (action.type === "LOADING") {
        return Object.assign(Object.assign({}, state), { loading: true });
    }
    if (action.type === "END_LOADING") {
        return Object.assign(Object.assign({}, state), { loading: false });
    }
    if (action.type === "SET_ARTICLES") {
        return Object.assign(Object.assign({}, state), { articles: action.payload, loading: false });
    }
    if (action.type === "SET_SEARCH_TERM") {
        return Object.assign(Object.assign({}, state), { loading: true, searchTerm: action.payload });
    }
    if (action.type === "ADD_FAVORITE") {
        return Object.assign(Object.assign({}, state), { favorites: [...state.favorites, action.payload] });
    }
    if (action.type === "REMOVE_FAVORITE") {
        return Object.assign(Object.assign({}, state), { favorites: action.payload });
    }
    if (action.type === "RETRIEVE_FAVORITES") {
        return Object.assign(Object.assign({}, state), { favorites: [...action.payload] });
    }
    if (action.type === "TOGGLE_MODAL") {
        return Object.assign(Object.assign({}, state), { modalOpen: !state.modalOpen });
    }
    return state;
};
exports.default = reducer;
