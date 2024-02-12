import { useRef, useState } from 'react'
import { db } from '../../../config/firebase'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default function FireItem({ todo }) {
  const [modal, setModal] = useState(false)
  const todoRef = useRef()

  async function handleCheckBox() {
    const docRef = doc(db, 'todos', todo.id)
    await updateDoc(docRef, {
      completed: !todo.completed,
    })
  }

  async function removeTodo() {
    await deleteDoc(doc(db, 'todos', todo.id))
  }

  function handleModal() {
    setModal(!modal)
  }

  async function editTodo() {
    const docRef = doc(db, 'todos', todo.id)
    await updateDoc(docRef, {
      content: todoRef.current.value,
    })
    setModal(!modal)
  }

  return (
    <li className='flex items-center justify-between border-b border-gray-300 py-1'>
      <div className='flex items-center gap-2 text-xl'>
        <input
          type='checkbox'
          name='content'
          checked={todo.completed}
          onChange={handleCheckBox}
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.content}
        </span>
      </div>
      <div>
        <button className='button' onClick={handleModal}>
          수정
        </button>
        <button className='button' onClick={removeTodo}>
          삭제
        </button>
      </div>

      {modal && (
        <div className='fixed w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center'>
          <div className='flex flex-col p-10 bg-white rounded-lg'>
            <input
              className='w-full border border-gray-400 rounded-md p-3 mb-4 text-xl'
              type='text'
              defaultValue={todo.content}
              ref={todoRef}
            />
            <div>
              <button className='button' onClick={() => setModal(!modal)}>
                취소
              </button>
              <button className='button' onClick={editTodo}>
                수정
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
