import React, { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr";
export default function Movies() {
  // Les states
  const [movies, setMovies] = useState([]);
  // UseEffect
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(movies);
      });
  }, []);
  // Le rendu
  return (
    <div className="movie_box">
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}
