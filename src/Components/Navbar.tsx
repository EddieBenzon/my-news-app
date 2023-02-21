import React from "react";
import { ReactComponent as Entertainment } from "../Assets/Home.svg";
import { ReactComponent as General } from "../Assets/General.svg";
import { ReactComponent as Health } from "../Assets/Health.svg";
import { ReactComponent as Science } from "../Assets/Science.svg";
import { ReactComponent as Sports } from "../Assets/Sports.svg";
import { ReactComponent as Technology } from "../Assets/Technology.svg";
import { ReactComponent as Business } from "../Assets/Business.svg";
import { BsFillStarFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";

type svgProps = {
  category: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const genreArray: svgProps[] = [
  {
    category: "General",
    Icon: General,
  },
  {
    category: "Health",
    Icon: Health,
  },
  {
    category: "Science",
    Icon: Science,
  },
  {
    category: "Sports",
    Icon: Sports,
  },
  {
    category: "Technology",
    Icon: Technology,
  },
  {
    category: "Business",
    Icon: Business,
  },
  {
    category: "Favorites",
    Icon: BsFillStarFill,
  },
];

const Navbar = () => {
  return (
    <div className="genres-wrapper">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        key={0}
      >
        <Entertainment />
        <p>Home</p>
      </NavLink>
      {genreArray.map((item, index) => {
        const { category, Icon } = item;
        return (
          <NavLink
            to={item.category}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            key={index}
          >
            <Icon />
            <p>{category}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
