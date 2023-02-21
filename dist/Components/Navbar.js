"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_svg_1 = require("../Assets/Home.svg");
const General_svg_1 = require("../Assets/General.svg");
const Health_svg_1 = require("../Assets/Health.svg");
const Science_svg_1 = require("../Assets/Science.svg");
const Sports_svg_1 = require("../Assets/Sports.svg");
const Technology_svg_1 = require("../Assets/Technology.svg");
const Business_svg_1 = require("../Assets/Business.svg");
const bs_1 = require("react-icons/bs");
const react_router_dom_1 = require("react-router-dom");
const genreArray = [
    {
        category: "General",
        Icon: General_svg_1.ReactComponent,
    },
    {
        category: "Health",
        Icon: Health_svg_1.ReactComponent,
    },
    {
        category: "Science",
        Icon: Science_svg_1.ReactComponent,
    },
    {
        category: "Sports",
        Icon: Sports_svg_1.ReactComponent,
    },
    {
        category: "Technology",
        Icon: Technology_svg_1.ReactComponent,
    },
    {
        category: "Business",
        Icon: Business_svg_1.ReactComponent,
    },
    {
        category: "Favorites",
        Icon: bs_1.BsFillStarFill,
    },
];
const Navbar = () => {
    return (<div className="genres-wrapper">
      <react_router_dom_1.NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")} key={0}>
        <Home_svg_1.ReactComponent />
        <p>Home</p>
      </react_router_dom_1.NavLink>
      {genreArray.map((item, index) => {
            const { category, Icon } = item;
            return (<react_router_dom_1.NavLink to={item.category} className={({ isActive }) => (isActive ? "link-active" : "link")} key={index}>
            <Icon />
            <p>{category}</p>
          </react_router_dom_1.NavLink>);
        })}
    </div>);
};
exports.default = Navbar;
