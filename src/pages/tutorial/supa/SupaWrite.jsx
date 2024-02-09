import { useRef } from 'react'
import supabase from '../../../config/supabase'
import { useNavigate } from 'react-router-dom'

export default function SupaWrite() {
  const location = useNavigate()
  const titleRef = useRef()
  const overviewRef = useRef()
  const scoreRef = useRef()

  async function addMovies(e) {
    e.preventDefault()

    const { data, error } = await supabase.from('movies').insert([
      {
        title: titleRef.current.value,
        overview: overviewRef.current.value,
        score: scoreRef.current.value,
      },
    ])

    location(-1)
  }

  return (
    <div className='supa_form'>
      <div className='inputs'>
        <input type='text' placeholder='title' ref={titleRef} />
        <textarea name='overview' cols='30' rows='10' placeholder='Write a overview' ref={overviewRef}></textarea>
        <input type='number' placeholder='score' ref={scoreRef} />
      </div>
      <div className='btns'>
        <button onClick={() => location(-1)}>취소</button>
        <button onClick={addMovies}>쓰기</button>
      </div>
    </div>
  )
}
