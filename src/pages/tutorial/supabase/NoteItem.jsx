import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export default function NoteItem({ note }) {
  return (
    <li className='border border-gray-300 p-6 rounded-lg w-96 min-w-80'>
      <h3 className='font-bold text-xl mb-4'>{note.title}</h3>
      <p className='h-[100px] text-sm mb-3'>{note.content}</p>
      <div className='flex items-center'>
        <p className='text-xs text-gray-500 mr-auto'>
          {dayjs(note.created_at).format('YYYY-MM-DD HH:mm:ss')}
        </p>
        <Link to='/tutorial/supabase/edit'>
          <button>수정</button>
        </Link>
        <button>삭제</button>
      </div>
    </li>
  )
}
