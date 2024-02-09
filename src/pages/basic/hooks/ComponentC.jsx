import ComponentD from './ComponentD'

export default function ComponentC() {
  return (
    <div className='component_box'>
      <h1>ComponentC</h1>
      <h3>{`Hello, `}</h3>
      <ComponentD />
    </div>
  )
}
