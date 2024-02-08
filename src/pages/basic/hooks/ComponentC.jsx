import ComponentD from './ComponentD'

export default function ComponentC(props) {
  return (
    <div className='component_box'>
      <h1>ComponentC</h1>
      <h3>{`Hello, ${props.user}`}</h3>
      <ComponentD user={props.user} />
    </div>
  )
}
