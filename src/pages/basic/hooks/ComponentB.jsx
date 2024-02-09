import ComponentC from './ComponentC'

export default function ComponentB() {
  return (
    <div className='component_box'>
      <h1>ComponentB</h1>
      <h3>{`Hello`}</h3>
      <ComponentC />
    </div>
  )
}
