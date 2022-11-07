import React from "react";
import { useParams } from "react-router-dom";

function GenreItem() {
  const { label } = useParams();
  console.log(label);
  return <div>Genre: {label}</div>;
}

export default GenreItem;
