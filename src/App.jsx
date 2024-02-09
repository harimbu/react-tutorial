import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Movie from './pages/tutorial/movie/Movie'
import MovieDetail from './pages/tutorial/movie/MovieDetail'
import Todo from './pages/tutorial/todo/Todo'
import Fire from './pages/tutorial/fire/Fire'
import Weather from './pages/tutorial/weather/Weather'
import Supa from './pages/tutorial/supa/Supa'
import SupaWrite from './pages/tutorial/supa/SupaWrite'
import SupaEdit from './pages/tutorial/supa/SupaEdit'
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

            <Route path='/basic'>
              <Route path='card' element={<Card />} />
              <Route path='hooks' element={<Hooks />} />
              <Route path='state' element={<State />} />
            </Route>

            <Route path='/tutorial'>
              <Route path='movie' element={<Movie />} />
              <Route path='movie/:id' element={<MovieDetail />} />
              <Route path='todo' element={<Todo />} />
              <Route path='fire' element={<Fire />} />
              <Route path='supa' element={<Supa />} />
              <Route path='supawrite' element={<SupaWrite />} />
              <Route path='supaedit' element={<SupaEdit />} />
              <Route path='weather' element={<Weather />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
