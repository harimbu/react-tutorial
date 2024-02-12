import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Movie() {
  const [movies, setMovies] = useState([])

  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const TMDB_AUTH = import.meta.env.VITE_TMDB_AUTH
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_AUTH,
    },
  }

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1',
      options
    )
      .then(res => res.json())
      .then(res => setMovies(res.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2>Movie</h2>
      <ul className='flex gap-4 flex-start flex-wrap'>
        {movies.map(movie => (
          <Link key={movie.id} to={`${movie.id}`} state={movie}>
            <li className='w-64 overflow-hidden'>
              <div className='h-96 bg-slate-400'>
                <img
                  className='w-full h-full object-cover'
                  src={IMG_URL + movie.poster_path}
                  alt=''
                />
              </div>
              <div className='bg-gray-100 px-2 py-3'>
                <p className='font-bold'>{movie.title}</p>
                <p className='text-xs text-gray-500'>
                  평점 : {movie.vote_average}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
