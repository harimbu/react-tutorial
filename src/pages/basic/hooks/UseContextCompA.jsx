import { createContext, useState } from 'react'
import UseContextCompB from './UseContextCompB'

export default function UseContextCompA() {
  const [user, setUser] = useState('Alice')

  return (
    <div className='component_box'>
      <h2>
        Component A <button>button</button>
      </h2>
      <h3>Hello {user}</h3>
      <UseContextCompB />
    </div>
  )
}
