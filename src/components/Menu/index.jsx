import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu({ isMenuActive }) {
  return (
    <Fragment>
      <div
        className={
          "bg-slate-400 w-20 h-screen fixed top-10 " +
          (isMenuActive ? "" : "hidden")
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/uploads">Uploads</Link>
          </li>
          <li>
            <Link to="/genres">Genres</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Menu;
