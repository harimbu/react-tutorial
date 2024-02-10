import { createContext, useState } from 'react'
import UseContextCompB from './UseContextCompB'

export const NameContext = createContext()

export default function UseContextCompA() {
  const [name, setName] = useState('Alice')

  function toggleName() {
    setName(name === 'Alice' ? 'Picaso' : 'Alice')
  }

  return (
    <div className='hooks'>
      <h2 className='text-2xl'>
        Component A
        <button className='button' onClick={toggleName}>
          button
        </button>
      </h2>
      <p>Hello, {name}</p>
      <NameContext.Provider value={name}>
        <UseContextCompB />
      </NameContext.Provider>
    </div>
  )
}
