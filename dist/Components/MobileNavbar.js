"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const MobileNavbar = () => {
    const location = (0, react_router_dom_2.useLocation)();
    return (<div className={location.pathname === "/" || location.pathname === "/Latest"
            ? "mobile-nav-wrapper"
            : "mobile-nav-wrapper-hidden"}>
      <react_router_dom_1.NavLink to="/" className={({ isActive }) => isActive ? "mobile-link-active" : "mobile-link"}>
        Featured
      </react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink to="/Latest" className={({ isActive }) => isActive ? "mobile-link-active" : "mobile-link"}>
        Latest
      </react_router_dom_1.NavLink>
    </div>);
};
exports.default = MobileNavbar;
