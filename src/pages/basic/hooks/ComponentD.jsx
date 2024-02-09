import { useContext } from 'react'
import { UserContext } from './ComponentA'

export default function ComponentD() {
  const user = useContext(UserContext)

  return (
    <div className='component_box'>
      <h1>ComponentD</h1>
      <h3>{`Hello, ${user}`}</h3>
    </div>
  )
}
