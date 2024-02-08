import { useState } from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {
  const [user, setUser] = useState('Alice')

  return (
    <div className='component_box'>
      <h1>ComponentA</h1>
      <h3>{`Hello, ${user}`}</h3>
      <ComponentB user={user} />
    </div>
  )
}
