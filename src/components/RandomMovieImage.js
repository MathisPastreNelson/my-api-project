import React, { useEffect, useState } from "react";
import axios from "axios";

// Images
import defaultImage from "../assets/les_fils_de_l_homme-2.jpg";

const RandomMovieImage = () => {
  const [movieImage, setMovieImage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = "f8aa98bfbb1c2940f9b235241e070eee";
      const randomMovieId = Math.floor(Math.random() * 90000); // Génère un nombre aléatoire entre 1 et 100000
      const apiUrl = `https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${apiKey}`;
      const response = await axios.get(apiUrl);
      setMovieImage(
        `https://image.tmdb.org/t/p/w500/${response.data.poster_path}`
      );
    };

    fetchMovie();
  }, [counter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="randomMovie_Box">
      <h3>Pas d'idée ?</h3>
      <p className="randomMovieText">Films aléatoire : </p>
      {movieImage === null ? (
        <img src={defaultImage} alt="random movie" />
      ) : (
        <img
          className="movie-image loaded"
          src={movieImage}
          alt="random movie"
        />
      )}
    </div>
  );
};

export default RandomMovieImage;
