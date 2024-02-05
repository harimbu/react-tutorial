import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";

export default function MovieDetail() {
  const BASIC_URL = 'https://image.tmdb.org/t/p/w500'
  const params = useParams()
  const movie = useLocation().state

  return (
    <Layout>
      <div className="movie_item">
        <div className="movie_poster">
          <img src={BASIC_URL + movie.poster_path} alt="" />
        </div>
        <div className="movie_info">
          <h2>{movie.title}</h2>
          <p className="overview">{movie.overview}</p>
          <p>개봉일 : {movie.release_date}</p>
          <p>평점 : {movie.vote_average}</p>
          <Link className="go_back" to={'/movie'}>👈</Link>
        </div>
      </div>
    </Layout>
  )
}
