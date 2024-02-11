import supabase from '../../../config/supabase'
import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NoteEdit() {
  const location = useLocation()
  const navigate = useNavigate()
  const titleRef = useRef()
  const contentRef = useRef()

  async function updateNote() {
    const { data, error } = await supabase
      .from('notes')
      .update({
        title: titleRef.current.value,
        content: contentRef.current.value,
      })
      .eq('id', location.state.id)

    navigate(-1)
  }

  function cancleNote() {
    navigate(-1)
  }

  return (
    <div>
      <h2 className='page_title'>Supabase Note - edit</h2>
      <div className='w-[500px]'>
        <input
          type='text'
          placeholder='제목'
          ref={titleRef}
          defaultValue={location.state.title}
        />
        <textarea
          placeholder='내용'
          cols='30'
          rows='8'
          defaultValue={location.state.content}
          ref={contentRef}
        ></textarea>
        <div>
          <button onClick={cancleNote}>취소하기</button>
          <button onClick={updateNote}>수정하기</button>
        </div>
      </div>
    </div>
  )
}
