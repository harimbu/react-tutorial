import { useEffect, useState } from 'react'
import FireItem from './FireItem'
import { db } from '../../../config/firebase'
import { collection, query, onSnapshot } from 'firebase/firestore'

export default function FireList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const todos = []
      querySnapshot.forEach(doc => {
        todos.push(doc.data())
      })
      setTodos(todos)
    })

    return () => unsubscribe
  }, [])

  return (
    <ul className='todo_list'>
      {todos.map(todo => (
        <FireItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
