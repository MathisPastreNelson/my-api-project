import React from "react";
import { NavLink } from "react-router-dom";

export default function GenreSelect() {
  return (
    <nav className="navLink_Bar">
      <NavLink
        className="genre_article"
        key="comedy"
        to={`/my-api-project/comedy/`}>
        Comédie
      </NavLink>
      <NavLink
        className="genre_article"
        key="horror"
        to={"/my-api-project/horror"}>
        Horreur
      </NavLink>
      <NavLink
        className="genre_article"
        key="action"
        to={"/my-api-project/action"}>
        Action
      </NavLink>
    </nav>
  );
}
