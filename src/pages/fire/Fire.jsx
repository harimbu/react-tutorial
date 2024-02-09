import FireInput from './FireInput'
import FireList from './FiteList'

export default function Fire() {
  return (
    <div className='todos'>
      <h2>Firebase Todo</h2>
      <FireInput />
      <FireList />
    </div>
  )
}
