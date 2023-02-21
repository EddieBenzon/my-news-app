"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = require("../context");
const HamburgerMenu = () => {
    const { state, dispatch } = (0, context_1.useGlobalContext)();
    return (<span className={state.modalOpen ? "hamburger-menu-opened" : "hamburger-menu"} onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: null })}>
      <div className="burger-line-top"></div>
      <div className="burger-line-mid"></div>
      <div className="burger-line-bottom"></div>
    </span>);
};
exports.default = HamburgerMenu;
