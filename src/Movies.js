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
  }, [movies]);
  // Le rendu
  return (
    <div className="movie_container">
      <h2>Films récents populaires :</h2>
      <div className="movie_box">
        {/* Le .map qui va récupéré l'enssemble des données de API_URL */}
        {movies.map((movie) => (
          <a
            href={`my-api-project/${movie.id}`}
            className="movie_article"
            key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              className="movie_img"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Affiche du film"
            />
            {/* {movie.overview ? (
              <p>{movie.overview}</p>
            ) : (
              <p>Description non disponible</p>
            )} */}
          </a>
        ))}
      </div>
    </div>
  );
}
