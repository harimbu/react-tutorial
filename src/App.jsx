import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/movie/Movie';
import MovieDetail from './pages/movie/MovieDetail';
import Todo from './pages/todo/Todo';
import Fire from './pages/fire/Fire';
import Weather from './pages/weather/Weather';
import Tutorial from './pages/Tutorial';
import './css/App.css'

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/movie' element={<Movie /> } />
        <Route path='/movie/:id' element={<MovieDetail /> } />
        <Route path='/todo' element={<Todo /> } />
        <Route path='/fire' element={<Fire /> } />
        <Route path='/weather' element={<Weather /> } />
        <Route path='/tutorial' element={<Tutorial /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}
