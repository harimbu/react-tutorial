import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import '../../css/todo.css'

export default function Todo() {
  return (
    <div className="todos">
      <h2>Todo list</h2>
      <TodoInput /> 
      <TodoList />
    </div>
  )
}
