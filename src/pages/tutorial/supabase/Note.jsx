import dayjs from 'dayjs'
import supabase from '../../../config/supabase'
import { useEffect, useState } from 'react'

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
        <button>노트작성</button>
      </div>

      <ul className='flex flex-wrap gap-6'>
        {notes.map(note => (
          <li
            key={note.id}
            className='border border-gray-300 p-6 rounded-lg w-96 min-w-80'
          >
            <h3 className='font-bold text-xl mb-4'>{note.title}</h3>
            <p className='h-[100px] text-sm mb-3'>{note.content}</p>
            <div className='flex items-center'>
              <p className='text-xs text-gray-500 mr-auto'>
                {dayjs(note.created_at).format('YYYY-MM-DD HH:mm:ss')}
              </p>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
