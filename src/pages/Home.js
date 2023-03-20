import React, { useEffect, useState } from "react";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

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
      });
  }, [movies]);

  // Le rendu
  return (
    <div>
      <Header />
      <nav className="navLink_Bar">
        {" "}
        <NavLink
          className="movie_article"
          key="comedy"
          to={"/my-api-project/comedy"}>
          Comédie
        </NavLink>
        <NavLink
          className="movie_article"
          key="horror"
          to={"/my-api-project/horror"}>
          Horreur
        </NavLink>
        <NavLink
          className="movie_article"
          key="Généraliste"
          to={"/my-api-project/general"}>
          Généraliste
        </NavLink>
      </nav>

      <div className="movie_container">
        <h2 className="movie_introduce">Films récents populaires :</h2>
        <div className="movie_box">
          {/* Le .map qui va récupéré l'enssemble des données de API_URL */}
          {movies.map((movie) => (
            <NavLink
              className="movie_article"
              key={movie.id}
              to={"/my-api-project/" + movie.id}>
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
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
