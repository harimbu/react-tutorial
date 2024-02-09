import { useEffect, useState } from 'react'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState('')

  const api_key = import.meta.env.VITE_WEATHER_API_KEY

  async function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    const res = await fetch(url)
    const result = await res.json()
    setWeatherData({
      city: result.name,
      temp: result.main.temp,
      weather: result.weather[0].description,
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude)
    })
  }, [])

  async function getCityWeather(e) {
    e.preventDefault()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const res = await fetch(url)
    const result = await res.json()
    setWeatherData({
      city: result.name,
      temp: result.main.temp,
      weather: result.weather[0].description,
    })
    setCity('')
  }

  return (
    <div className='weather_container'>
      <form className='weather_search' onSubmit={getCityWeather}>
        <input type='text' placeholder='Write your city...' value={city} onChange={e => setCity(e.target.value)} />
      </form>
      <div className='weather'>
        <h3>{weatherData.city}</h3>
        <p className='temp'>{weatherData.temp} °C</p>
        <p>{weatherData.weather}</p>
      </div>
    </div>
  )
}
