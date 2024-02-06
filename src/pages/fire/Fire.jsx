import FireInput from "./FireInput";
import FireList from "./FiteList";
import '../../css/todo.css'

export default function Fire() {
  return (
    <div className="todos">
      <h2>Firebase Todo</h2>
      <FireInput /> 
      <FireList />
    </div>
  )
}
