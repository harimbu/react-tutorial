import { useRef, useState } from 'react'

export default function TodoItem({ todo, state }) {
  const [modal, setModal] = useState(false)
  const todoRef = useRef()

  function handleDelete(id) {
    state.removeTodo(id)
  }

  function handleEdit(id, title) {
    state.editTodo(id, title)
    setModal(!modal)
  }

  function handleChange(id, value) {
    state.toggleTodo(id, value)
  }

  return (
    <li className='flex items-center justify-between border-b border-gray-300 py-1'>
      <input
        type='checkbox'
        className='mr-2'
        checked={todo.completed}
        onChange={() => handleChange(todo.id, !todo.completed)}
      />
      <span className={todo.completed ? 'line-through mr-auto' : 'mr-auto'}>{todo.title}</span>
      <button onClick={() => setModal(!modal)}>수정</button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>

      {modal && (
        <div className='fixed w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center'>
          <div className='flex flex-col p-10 bg-white rounded-lg'>
            <input
              className='w-full border border-gray-400 rounded-md p-3 mb-4 text-xl'
              type='text'
              defaultValue={todo.title}
              ref={todoRef}
            />
            <div>
              <button onClick={() => setModal(!modal)}>취소</button>
              <button onClick={() => handleEdit(todo.id, todoRef.current.value)}>수정</button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
