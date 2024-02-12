import React, { useRef } from 'react'
import { TodoStore } from '../../../store/TodoStore'
import TodoItem from './TodoItem'

export default function Zustand() {
  const titleRef = useRef(null)
  const state = TodoStore(state => state)

  function handleSubmit(e) {
    e.preventDefault()
    state.addTodo({
      id: new Date().getTime(),
      title: titleRef.current.value,
      completed: false,
    })
    titleRef.current.value = ''
  }

  return (
    <div className='w-[500px]'>
      <h2>Zustand</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={titleRef} placeholder='Write a todo...' />
      </form>

      <ul>
        {state.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} state={state} />
        ))}
      </ul>
    </div>
  )
}
