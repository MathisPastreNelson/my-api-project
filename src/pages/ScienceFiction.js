import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";

// Images
import affiche404 from "../assets/affiche_nondisponible.jpg";

export default function ScienceFiction() {
  // Les states
  const [movies, setMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr_fr&sort_by=release_date.desc&page=${moviePage}&with_genres=878`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [API_URL]);

  console.log(movies);

  return (
    <div>
      <Header />
      <div className="movie_container">
        <NavLink className="back_toIndex" key="comedy" to={`/my-api-project/`}>
          Page d'index
        </NavLink>
        <h2 className="movie_introduce">Films de Science-Fiction :</h2>
        <p className="textInfo">Vous etes sur la page {moviePage}.</p>
        <nav className="navLink_Bar">
          {[...Array(20)].map((_, i) => (
            <NavLink
              key={`page${i + 1}`}
              onClick={() => setMoviePage(i + 1)}
              className={moviePage === i + 1 ? "active" : ""}>
              {i + 1}
            </NavLink>
          ))}
        </nav>
        <div className="movie_box">
          {/* Le .map qui va récupéré l'enssemble des données de API_URL */}
          {movies.map((movie) => (
            <NavLink
              className="movie_article"
              key={movie.id}
              to={"/my-api-project/" + movie.id}>
              <h3>{movie.title}</h3>
              {movie.poster_path === null ? (
                <img
                  className="movie_img"
                  src={affiche404}
                  alt="Affiche du film"
                />
              ) : (
                <img
                  className="movie_img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Affiche du film"
                />
              )}
              <p>Date de sortie : {movie.release_date}</p>
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
