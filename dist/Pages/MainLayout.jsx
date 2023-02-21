"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Banner_1 = __importDefault(require("../Components/Banner"));
const MobileModal_1 = __importDefault(require("../Components/MobileModal"));
const MobileNavbar_1 = __importDefault(require("../Components/MobileNavbar"));
const Navbar_1 = __importDefault(require("../Components/Navbar"));
const SearchBar_1 = __importDefault(require("../Components/SearchBar"));
const context_1 = require("../context");
const RootLayout = () => {
    const { state } = (0, context_1.useGlobalContext)();
    return (<>
      {state.modalOpen && <MobileModal_1.default />}
      <header>
        <Banner_1.default />
        <SearchBar_1.default />
        <MobileNavbar_1.default />
      </header>

      <main className="main-page">
        <div className="nav-displayer">
          <Navbar_1.default />
        </div>
        <react_router_dom_1.Outlet />
      </main>
    </>);
};
exports.default = RootLayout;
