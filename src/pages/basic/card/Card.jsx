import CardItem from './CardItem'
import Photo from '/photo.jpg'

export default function Card() {
  const person = {
    name: 'Tnag Wei 탕웨이',
    text: '2007년 영화 《색, 계》에 주연으로 출연하여 명성을 얻었다. 그러나...',
    photo: Photo,
  }

  return (
    <>
      <h2 className='basic_title'>Card Component</h2>
      <CardItem person={person} />
      <CardItem person={person} />
      <CardItem person={person} />
      <CardItem person={person} />
    </>
  )
}
