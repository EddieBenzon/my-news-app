import React from "react";
import { useGlobalContext } from "../context";

const HamburgerMenu = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <span
      className={state.modalOpen ? "hamburger-menu-opened" : "hamburger-menu"}
      onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: null })}
    >
      <div className="burger-line-top"></div>
      <div className="burger-line-mid"></div>
      <div className="burger-line-bottom"></div>
    </span>
  );
};

export default HamburgerMenu;
