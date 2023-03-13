import React, { useState } from "react";

export default function Movies() {
  // Les states
  const [movies, setMovies] = useState([]);
  // Le rendu
  return (
    <div className="movie_box">
      <p>Movies will come here</p>
    </div>
  );
}
