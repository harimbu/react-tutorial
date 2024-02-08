import ComponentC from './ComponentC'

export default function ComponentB(props) {
  return (
    <div className='component_box'>
      <h1>ComponentB</h1>
      <h3>{`Hello, ${props.user}`}</h3>
      <ComponentC user={props.user} />
    </div>
  )
}
