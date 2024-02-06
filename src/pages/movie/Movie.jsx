import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/movie.css'

export default function Movie() {
  const [movies, setMovies] = useState([])

  const BASIC_URL = 'https://image.tmdb.org/t/p/w500'
  const AUTH = import.meta.env.VITE_AUTH
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTH
    }
  };

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1', options)
    .then(res => res.json())
    .then(res => setMovies(res.results))
    .catch(err => console.error(err));
  }, [])

  return (
    <ul className="movie_list">
      {movies.map(movie => 
        <Link key={movie.id} to={'/movie/' + movie.id} state={movie}>
          <li>
            <div className="movie_thumbnail">
              <img src={BASIC_URL + movie.poster_path} alt="" />
            </div>
            <div className="movie_title">
              <h4>{movie.title}</h4>
              <p>평점 : {movie.vote_average}</p>
            </div>
          </li>
        </Link>
      )}
    </ul>
  )
}
