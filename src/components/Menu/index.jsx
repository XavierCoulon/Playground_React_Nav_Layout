import React, { Fragment } from "react";
import { menuLinks } from "../../config/menuLinks";
import MenuLink from "./MenuLink";

function Menu({ setCurrentPage, isMenuActive }) {
  return (
    <Fragment>
      <div
        className={
          "bg-slate-400 w-20 h-screen fixed top-10 " +
          (isMenuActive ? "" : "hidden")
        }
      >
        <ul>
          {menuLinks.map((menuLink) => (
            <MenuLink
              id={menuLink.id}
              name={menuLink.name}
              path={menuLink.path}
              setCurrentPage={setCurrentPage}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Menu;
