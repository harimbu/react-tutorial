import { Link, useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
  const BASIC_URL = 'https://image.tmdb.org/t/p/w500'
  const params = useParams()
  const movie = useLocation().state

  return (
    <div className='w-[1000px]'>
      <h2 className='page_title'>{movie.title}</h2>
      <div className='flex gap-6'>
        <div className='w-[450px]'>
          <img className='w-full' src={BASIC_URL + movie.poster_path} alt='' />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h4 className='font-bold text-xl'>요약</h4>
          <p className='text-gray-600 text-sm'>{movie.overview}</p>
          <h4 className='font-bold text-xl'>개봉일</h4>
          <p className='text-sm'>{movie.release_date}</p>
          <h4 className='font-bold text-xl'>평점</h4>
          <p className='text-sm'>{movie.vote_average}</p>
          <Link className='text-4xl' to={'/tutorial/movie'}>
            👈
          </Link>
        </div>
      </div>
    </div>
  )
}
