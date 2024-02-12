import CardItem from './CardItem'
import Photo from '/photo.jpg'

export default function Card() {
  const profile = {
    name: 'Tnag Wei',
    text: '2007년 영화 《색, 계》에 주연으로 출연하여 명성을 얻었다. 그러나...',
    img: Photo,
  }

  return (
    <>
      <h2>Card Component</h2>
      <div className='flex items-start flex-wrap gap-7'>
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
        <CardItem profile={profile} />
      </div>
    </>
  )
}
