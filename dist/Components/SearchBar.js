"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HamburgerMenu_1 = __importDefault(require("./HamburgerMenu"));
const InputField_1 = __importDefault(require("./InputField"));
const MyNewsLogo_1 = __importDefault(require("./MyNewsLogo"));
const SearchBar = () => {
    return (<div className="search-bar">
      <div className="main-input-wrapper">
        <MyNewsLogo_1.default />
        <HamburgerMenu_1.default />
        <InputField_1.default />
      </div>
    </div>);
};
exports.default = SearchBar;
