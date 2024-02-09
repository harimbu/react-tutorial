import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList() {
  const [todos, setTodos] = useState([])
  
  const options = {
    method: 'GET'
  }
  useEffect(()=>{
    fetch('http://localhost:5000/todos', options)
    .then(res => res.json())
    .then(result => setTodos(result))
  }, [todos])

  return (
    <ul className="todo_list">
      {todos.map(todo=> <TodoItem key={todo.id} todo={todo} /> )}      
    </ul>
  )
}
