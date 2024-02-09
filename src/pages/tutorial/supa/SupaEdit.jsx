import { useRef } from 'react'
import supabase from '../../../config/supabase'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SupaEdit() {
  const navigate = useNavigate()
  const movie = useLocation().state

  const titleRef = useRef()
  const overviewRef = useRef()
  const scoreRef = useRef()

  async function editMovies(e) {
    e.preventDefault()

    const { data, error } = await supabase
      .from('movies')
      .update([
        {
          title: titleRef.current.value,
          overview: overviewRef.current.value,
          score: scoreRef.current.value,
        },
      ])
      .eq('id', movie.id)

    navigate(-1)
  }

  return (
    <div className='supa_form'>
      <div className='inputs'>
        <input type='text' placeholder='title' ref={titleRef} defaultValue={movie.title} />
        <textarea name='overview' cols='30' rows='10' placeholder='Write a overview' ref={overviewRef} defaultValue={movie.overview}></textarea>
        <input type='number' placeholder='score' ref={scoreRef} defaultValue={movie.score} />
      </div>
      <div className='btns'>
        <button onClick={() => navigate(-1)}>취소</button>
        <button onClick={editMovies}>쓰기</button>
      </div>
    </div>
  )
}
