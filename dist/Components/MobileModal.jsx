"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HamburgerMenu_1 = __importDefault(require("./HamburgerMenu"));
const InputField_1 = __importDefault(require("./InputField"));
const Navbar_1 = __importDefault(require("./Navbar"));
const MobileModal = () => {
    return (<div className="modal">
      <div className="burger-positioner">
        <HamburgerMenu_1.default />
      </div>
      <section className="modal-title">
        <span className="span-my">My</span>
        <span className="span-news">News</span>
      </section>
      <InputField_1.default />
      <div className="navbox">
        <Navbar_1.default />
      </div>
    </div>);
};
exports.default = MobileModal;
