import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NoteWrite() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const contentRef = useRef()

  function writeNote() {
    console.log('write')
  }

  function cancleNote() {
    navigate(-1)
  }

  return (
    <div>
      <h2 className='page_title'>Supabase Note - write</h2>
      <div className='w-[500px]'>
        <input type='text' placeholder='제목' ref={titleRef} />
        <textarea
          placeholder='내용'
          cols='30'
          rows='8'
          ref={contentRef}
        ></textarea>
        <div>
          <button onClick={cancleNote}>취소하기</button>
          <button onClick={writeNote}>작성하기</button>
        </div>
      </div>
    </div>
  )
}
