import { useState } from 'react'

export default function TodoInput() {
  const [todo, setTodo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify({
        content: todo,
        completed: false,
      }),
    }
    fetch('http://localhost:5000/todos', options)
      .then(res => res.json())
      .then(result => console.log(result))
      .then(() => setTodo(''))
  }

  function handleChange(e) {
    setTodo(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='w-full border border-gray-400 rounded-md p-3 mb-4 text-xl'
        type='text'
        placeholder='Write a todo...'
        value={todo}
        onChange={handleChange}
      />
    </form>
  )
}
