export default function CardItem(props) {
  return (
    <div className='w-72 h-72 p-6 border rounded-xl flex flex-col items-center justify-around gap-2 shadow-md'>
      <div className='w-36 h-36 rounded-full overflow-hidden'>
        <img src={props.profile.img} alt='' />
      </div>
      <h3 className='text-lg font-bold'>{props.profile.name}</h3>
      <p className='text-xs text-gray-500 text-center px-3'>{props.profile.text}</p>
    </div>
  )
}
