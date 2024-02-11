import { Link } from 'react-router-dom'
import supabase from '../../../config/supabase'

export default function NoteItem({ movie, onRemove }) {
  async function removeMovie() {
    const { error } = await supabase.from('movies').delete().eq('id', movie.id)

    onRemove(movie.id)
  }

  return (
    <div className='movies_item'>
      <h3 className='movies__title'>{movie.title}</h3>
      <p className='movies__overview'>{movie.overview}</p>
      <div className='movies__bottom'>
        <p className='score'>평점 : {movie.score}</p>
        <Link to={'/supaedit'} state={movie}>
          수정
        </Link>
        <Link onClick={removeMovie}>삭제</Link>
      </div>
    </div>
  )
}
