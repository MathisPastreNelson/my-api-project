import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";

// Images
import affiche404 from "../assets/affiche_nondisponible.jpg";

import { FaCircleNotch } from "react-icons/fa";

export default function Comedy() {
  // Les states
  const [movies, setMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr_fr&sort_by=release_date.desc&page=${moviePage}&with_genres=35`;

  const [totalPages, setTotalPages] = useState(1);
  const maxPagesToShow = 11;
  const startPage = Math.max(1, moviePage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  const [loading, setLoading] = useState(true); // Nouveau state pour l'indicateur de chargement

  useEffect(() => {
    setLoading(true); // Afficher l'indicateur de chargement avant de lancer la requête
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false); // Masquer l'indicateur de chargement après avoir reçu les données
      });
  }, [API_URL]);

  return (
    <div>
      <Header />
      <div className="movie_container">
        <NavLink className="back_toIndex" key="index" to={`/my-api-project/`}>
          Page d'index
        </NavLink>
        <h2 className="movie_introduce">Films Comédie :</h2>
        <p className="textInfo">Vous etes sur la page {moviePage}.</p>
        <nav className="navLink_Bar">
          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => i + startPage
          ).map(
            (pageNumber) =>
              pageNumber <= 499 && (
                <NavLink
                  key={`page${pageNumber}`}
                  onClick={() => setMoviePage(pageNumber)}
                  className={moviePage === pageNumber ? "active" : ""}>
                  {pageNumber}
                </NavLink>
              )
          )}
        </nav>

        {/* Afficher l'indicateur de chargement si les données sont en cours de chargement */}
        {loading && (
          <div className="loader">
            <FaCircleNotch className="loaderIcon" /> Chargement...
          </div>
        )}

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
