import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Memo from './pages/Memo';
import Tutorial from './pages/Tutorial';

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/movie' element={<Movie /> } />
        <Route path='/memo' element={<Memo /> } />
        <Route path='/tutorial' element={<Tutorial /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
