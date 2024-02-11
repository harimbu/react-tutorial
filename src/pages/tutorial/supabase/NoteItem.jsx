import supabase from '../../../config/supabase'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export default function NoteItem({ note, updateLocalNote }) {
  async function removeNote(id) {
    const { error } = await supabase.from('notes').delete().eq('id', id)
    updateLocalNote(note.id)
  }

  return (
    <li className='border border-gray-300 p-6 rounded-lg w-96 min-w-80'>
      <h3 className='font-bold text-xl mb-4'>{note.title}</h3>
      <p className='h-[100px] text-sm mb-3'>{note.content}</p>
      <div className='flex items-center'>
        <p className='text-xs text-gray-500 mr-auto'>
          {dayjs(note.created_at).format('YYYY-MM-DD HH:mm:ss')}
        </p>
        <Link to='/tutorial/supabase/edit' state={note}>
          <button>수정</button>
        </Link>
        <button onClick={() => removeNote(note.id)}>삭제</button>
      </div>
    </li>
  )
}
