"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Banner = () => {
    return (<div className="banner">
      <h3>Make MyNews your homepage</h3>
      <p>Every day discover what's trending on the internet!</p>
      <div className="right-info">
        <h3>GET</h3>
        <p>No, thanks</p>
      </div>
    </div>);
};
exports.default = Banner;
