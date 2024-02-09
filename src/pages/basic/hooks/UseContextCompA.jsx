import { createContext, useState } from 'react'
import UseContextCompB from './UseContextCompB'

export const UserContext = createContext()

export default function UseContextCompA() {
  const [user, setUser] = useState('Alice')

  function toggleUser() {
    setUser(user === 'Alice' ? 'Picaso' : 'Alice')
  }

  return (
    <div className='component_box'>
      <h2>
        Component A <button onClick={toggleUser}>button</button>
      </h2>
      <h3>Hello {user}</h3>
      <UserContext.Provider value={user}>
        <UseContextCompB />
      </UserContext.Provider>
    </div>
  )
}
