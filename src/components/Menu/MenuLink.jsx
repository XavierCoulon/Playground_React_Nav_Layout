import React from "react";

function MenuLink({ id, name, path, setCurrentPage }) {
  return (
    <li
      className="cursor-pointer"
      key={id}
      onClick={() => setCurrentPage(path)}
    >
      {name}
    </li>
  );
}

export default MenuLink;
