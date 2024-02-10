import { useContext } from 'react'
import { NameContext } from './UseContextCompA'

export default function UseContextCompD() {
  const name = useContext(NameContext)

  return (
    <div className='hooks'>
      <h2 className='text-2xl'>Component D</h2>
      <p>Hello, {name}</p>
    </div>
  )
}
