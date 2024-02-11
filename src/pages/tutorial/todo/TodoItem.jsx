export default function TodoItem({ todo }) {
  function handleDelete() {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'DELETE',
    })
  }

  function handleChange() {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result))
  }

  return (
    <li className='flex items-center justify-between border-b border-gray-300 py-1'>
      <div className='flex items-center gap-2 text-xl'>
        <input
          type='checkbox'
          name='content'
          checked={todo.completed}
          onChange={handleChange}
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.content}
        </span>
      </div>
      <div>
        {/* <button onClick={updateTodo}>수정</button> */}
        <button className='button' onClick={handleDelete}>
          삭제
        </button>
      </div>
    </li>
  )
}
