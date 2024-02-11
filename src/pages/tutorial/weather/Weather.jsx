import { useEffect, useState } from 'react'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState('')

  const api_key = import.meta.env.VITE_WEATHER_API_KEY

  async function getPosWeather(lat, lon) {
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
      getPosWeather(position.coords.latitude, position.coords.longitude)
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
    <div className='w-[360px]'>
      <h2 className='page_title'>Weather</h2>
      <form className='weather_search' onSubmit={getCityWeather}>
        <input
          type='text'
          placeholder='Write your city...'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </form>
      <div className='h-[500px] bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg flex flex-col items-center justify-center text-white gap-10'>
        <p className='text-5xl font-bold'>{weatherData.city}</p>
        <p className='text-3xl'>{weatherData.temp} °C</p>
        <p className='text-xl'>{weatherData.weather}</p>
      </div>
    </div>
  )
}
