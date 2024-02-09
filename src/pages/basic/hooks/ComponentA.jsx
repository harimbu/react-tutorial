import { createContext, useState } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()

export default function ComponentA() {
  const [user, setUser] = useState('Alice')

  function toggleUser() {
    setUser(user === 'Alice' ? 'Picaso' : 'Alice')
  }

  return (
    <div className='component_box'>
      <h1>ComponentA</h1>
      <h3>{`Hello, ${user}`}</h3>
      <button onClick={toggleUser}>button</button>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  )
}
