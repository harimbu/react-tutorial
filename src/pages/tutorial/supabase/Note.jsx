import dayjs from 'dayjs'
import supabase from '../../../config/supabase'
import { useEffect, useState } from 'react'
import NoteItem from './NoteItem'
import { Link } from 'react-router-dom'

export default function Note() {
  const [notes, setNotes] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    async function getNotes() {
      const { data, error } = await supabase.from('notes').select('*')
      if (error) {
        setErrorMsg('노트를 작성해 주세요')
      }
      if (data) {
        setNotes(data)
      }
    }

    getNotes()
  }, [])

  return (
    <>
      <h2 className='page_title'>Supabase Note</h2>

      <div className='mb-4'>
        <Link to='/tutorial/supabase/write'>
          <button>노트작성</button>
        </Link>
      </div>

      <ul className='flex flex-wrap gap-6'>
        {notes.map(note => (
          <NoteItem note={note} key={note.id} />
        ))}
      </ul>
    </>
  )
}
