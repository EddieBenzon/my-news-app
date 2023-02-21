import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/" || location.pathname === "/Latest"
          ? "mobile-nav-wrapper"
          : "mobile-nav-wrapper-hidden"
      }
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "mobile-link-active" : "mobile-link"
        }
      >
        Featured
      </NavLink>
      <NavLink
        to="/Latest"
        className={({ isActive }) =>
          isActive ? "mobile-link-active" : "mobile-link"
        }
      >
        Latest
      </NavLink>
    </div>
  );
};

export default MobileNavbar;
