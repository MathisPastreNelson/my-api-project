import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Images
import affiche404 from "../assets/affiche_nondisponible.jpg";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // UseEffect
  useEffect(() => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr&query=${query}`
      : API_URL;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <form className="researchForm" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Recherche de films..."
        value={query}
        className="researchInput"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className="researchButton" type="submit">
        Rechercher
      </button>
      <div className="searchResults">
        {movies.map((result) => (
          <div className="movie_searched_article" key={result.id}>
            <NavLink to={"/my-api-project/" + result.id}>
              <h3 className="movie_title_searched">{result.title}</h3>
              {result.poster_path === null ? (
                <img
                  className="movie_img_searched"
                  src={affiche404}
                  alt="Affiche du film"
                />
              ) : (
                <img
                  className="movie_img_searched"
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt="Affiche du film"
                />
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </form>
  );
}
