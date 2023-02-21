"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("../src/CSS/main.css");
const App_1 = __importDefault(require("./App"));
const context_1 = require("../src/context");
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.default.StrictMode>
    <context_1.AppProvider>
      <App_1.default />
    </context_1.AppProvider>
  </react_1.default.StrictMode>);
