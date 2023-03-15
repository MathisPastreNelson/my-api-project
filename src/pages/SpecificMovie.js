import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Movies() {
  let { id } = useParams();

  /* Récupération de l'ID grâce à l'URL */
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr`;

  // Les states
  const [movies, setMovies] = useState([]);

  // UseEffect
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [movies, API_URL]);

  // Le rendu
  return (
    <div>
      <Header />
      <div className="movie_container">
        <div>
          <h2>{movies.title}</h2>
          <img
            className="movie_img"
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt="Affiche du film"
          />
          <p>{movies.overview}</p>
          <p>
            Budget :{" "}
            {movies.budget > 0 ? movies.budget / 1000000 : "Non renseigné"}
            {movies.budget > 0 && " M"}
          </p>
        </div>
        <a href="../my-api-project">Retour à la page d'index</a>
      </div>
      <Footer />
    </div>
  );
}
