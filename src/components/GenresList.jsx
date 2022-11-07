import React from "react";
import { Link } from "react-router-dom";

function GenresList() {
  const genres = [
    { label: "rock" },
    { label: "electro" },
    { label: "classique" },
  ];

  return (
    <>
      {genres.map((genre) => (
        <Link to={`/genres/${genre.label}`}>
          Genre: {genre.label}
          <br />
        </Link>
      ))}
    </>
  );
}

export default GenresList;
