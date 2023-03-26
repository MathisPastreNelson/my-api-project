import React, { useState, useEffect } from "react";

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
      {movies && (
        <ul className="searchResults">
          {movies.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
