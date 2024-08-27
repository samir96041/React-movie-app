import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";



// Single Movie Detail Page

const Moviedetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [id]);

  return (
    <div className="movie-detail-container">
      {movie ? (
        <>
          <div className="movie-header">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />

            <div className="movie-info">
              <h1>{movie.title}</h1>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <div className="movie-overview">
                <h2>Overview</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="movie-backdrop"
            />
          </div>

          <div className="movie-cast">
            <h2>Cast</h2>
            <div className="cast-grid">
              {cast.map((actor) => (
                <div className="cast-card" key={actor.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="cast-image"
                  />
                  <p className="cast-name">{actor.name}</p>
                  <p className="cast-character">as {actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Moviedetail;
