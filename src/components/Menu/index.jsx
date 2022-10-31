import React from "react";
import { menuLinks } from "../../config/menuLinks";
import MenuLink from "./MenuLink";

function Menu({ setCurrentPage }) {
  return (
    <div className="bg-slate-400 w-20 h-screen fixed top-10">
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
  );
}

export default Menu;
