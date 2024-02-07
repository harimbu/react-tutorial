import { useEffect, useState } from 'react'
import '../../css/weather.css'

export default function Weather() {
  const [item, setItem] = useState({})

  const KEY = 'a5819ac017fa9d0149bef8ca63834cef'

  function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&lang=kr&units=metric`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setItem({
        city: result.name,
        temp: result.main.temp,
        weather: result.weather[0].description
      })}
    ) 
  }
  
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition( position => {
      getWeather(position.coords.latitude, position.coords.longitude)   
    })
  }, [])


  return (
      <div className="weather_container">
        <input type="text" placeholder="city?" />
        <div className="weather">
          <h3>{item.city}</h3>
          <p>{item.temp} 도</p>
          <p>{item.weather}</p>
        </div>
      </div>
  )
}
