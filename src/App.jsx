import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/movie/Movie'
import MovieDetail from './pages/movie/MovieDetail'
import Todo from './pages/todo/Todo'
import Fire from './pages/fire/Fire'
import Weather from './pages/weather/Weather'
import Header from './components/Header'
import Supa from './pages/supa/Supa'
import SupaWrite from './pages/supa/SupaWrite'
import SupaEdit from './pages/supa/SupaEdit'
import Hooks from './pages/basic/hooks/Hooks'
import State from './pages/basic/state/State'
import Card from './pages/basic/card/Card'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basic/card' element={<Card />} />
            <Route path='/hooks' element={<Hooks />} />
            <Route path='/state' element={<State />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/fire' element={<Fire />} />
            <Route path='/supa' element={<Supa />} />
            <Route path='/supawrite' element={<SupaWrite />} />
            <Route path='/supaedit' element={<SupaEdit />} />
            <Route path='/weather' element={<Weather />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
