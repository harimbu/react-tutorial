import { useContext } from 'react'
import { UserContext } from './UseContextCompA'

export default function UseContextCompD() {
  const user = useContext(UserContext)

  return (
    <div className='component_box'>
      <h2>Component D</h2>
      <h3>Hello {user}</h3>
    </div>
  )
}
