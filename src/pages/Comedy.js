import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Comedy() {
  // Les states
  const [movies, setMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(20);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr_fr&sort_by=release_date.desc&page=${moviePage}&with_genres=35`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [API_URL]);

  return (
    <div>
      <Header />
      <div className="movie_container">
        <h2 className="movie_introduce">Comédies récentes :</h2>
        <nav className="navLink_Bar">
          <NavLink
            className="movie_article"
            key="less"
            onClick={() => setMoviePage(moviePage - 1)} // mettre à jour l'état
          >
            Sortie plus récente
          </NavLink>
          <NavLink
            className="movie_article"
            key="plus"
            onClick={() => setMoviePage(moviePage + 1)} // mettre à jour l'état
          >
            Sortie plus ancienne
          </NavLink>
        </nav>
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
