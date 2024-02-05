export default function TodoItem({todo}) {
  function handleDelete() {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'DELETE'
    })
  }

  function handleChange() {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        completed : !todo.completed
      }),
    })
    .then((res) => res.json())
    .then((result) => console.log(result))
  }  

  return (
  <li className="todo_item">
    <div className='todo__text'>
      <input
        type="checkbox"
        name ='content'
        checked={todo.completed}
        onChange={handleChange}
      />
      <span className={todo.completed ? 'done' : ''}>
        {todo.content}
      </span>
    </div>
    <div className="todo__control">
      {/* <button onClick={updateTodo}>수정</button> */}
      <button onClick={handleDelete}>삭제</button>
    </div>
  </li>

  )
}
