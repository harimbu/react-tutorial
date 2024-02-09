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
    setModal(!modal)
    const docRef = doc(db, 'todos', todo.id)
    await updateDoc(docRef, {
      content: todoRef.current.value,
    })
  }

  return (
    <li className='todo_item'>
      <div className='todo__text'>
        <input type='checkbox' name='content' checked={todo.completed} onChange={handleCheckBox} />
        <span className={todo.completed ? 'done' : ''}>{todo.content}</span>
      </div>
      <div className='todo__control'>
        <button onClick={handleModal}>수정</button>
        <button onClick={removeTodo}>삭제</button>
      </div>

      {modal && (
        <div className='modal_container'>
          <div className='modal'>
            <input type='text' defaultValue={todo.content} ref={todoRef} />
            <div className='control'>
              <button onClick={() => setModal(!modal)}>취소</button>
              <button onClick={editTodo}>수정</button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
