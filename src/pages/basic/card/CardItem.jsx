export default function CardItem(props) {
  return (
    <div className='card'>
      <div className='photo'>
        <img src={props.person.photo} alt='' />
      </div>
      <h3>{props.person.name}</h3>
      <p>{props.person.text}</p>
    </div>
  )
}
