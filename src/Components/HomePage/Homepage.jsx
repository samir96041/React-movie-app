import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../../Store/HomeSlice";
import "./Homepage.css";
import { Link } from "react-router-dom";


// Home Page / Popular Movie Page


const Homepage = () => {
  const dispatch = useDispatch();
  const HomeData = useSelector((state) => state.HomeR.HomeData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getdata(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (

    <div className="homepage-container">
      <div className="movie-grid">
        {HomeData?.results?.slice(0, 10).map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className="movie-card" key={movie.id} >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h2 className="movie-title" >{movie.title}</h2>
            <p className="movie-rating">Rating: {movie.vote_average}</p>
          </div>
          </Link>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>


  );
};

export default Homepage;
