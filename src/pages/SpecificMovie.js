import React from "react";
import { useParams } from "react-router-dom";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Movies() {
  /* Récupération de l'ID grâce à l'URL */
  let { id } = useParams();

  // Le rendu
  return (
    <div>
      <Header />
      <div className="movie_container">
        <h2>Films récents populaires :</h2>
        <div className="movie_box">
          <p>test</p>
        </div>
        <a href="../my-api-project">Retour à la page d'index</a>
      </div>
      <Footer />
    </div>
  );
}
