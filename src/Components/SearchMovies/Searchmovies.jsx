import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Searchmovies.css";


//Searched Movie Page 

const Searchmovies = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`
        );
        setResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results-container2">
      <h1>Search Results for "{query}"</h1>
      <div className="movie-grid2">
        {results.map((movie) => (
          <div className="movie-card2" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster2"
            />
            <h2 className="movie-title2">{movie.title}</h2>
            <p className="movie-rating2">Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchmovies;
