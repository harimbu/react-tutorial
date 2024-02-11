import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function Fire() {
  return (
    <div className='w-[500px]'>
      <h2 className='page_title'>Firebase Todo</h2>
      <TodoInput />
      <TodoList />
    </div>
  )
}
