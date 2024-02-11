import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Card from './pages/basic/card/Card.jsx'
import Hooks from './pages/basic/hooks/Hooks.jsx'
import State from './pages/basic/state/State.jsx'
import Movie from './pages/tutorial/movie/Movie.jsx'
import MovieDetail from './pages/tutorial/movie/MovieDetail.jsx'
import Todo from './pages/tutorial/todo/Todo.jsx'
import Firebase from './pages/tutorial/firebase/Todo.jsx'
import Supabase from './pages/tutorial/supabase/Note.jsx'
import NoteWrite from './pages/tutorial/supabase/NoteWrite.jsx'
import NoteEdit from './pages/tutorial/supabase/NoteEdit.jsx'
import Weather from './pages/tutorial/weather/Weather.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/basic',
        children: [
          { path: 'card', element: <Card /> },
          { path: 'hooks', element: <Hooks /> },
          { path: 'state', element: <State /> },
        ],
      },
      {
        path: '/tutorial',
        children: [
          { path: 'movie', element: <Movie /> },
          { path: 'movie/:id', element: <MovieDetail /> },
          { path: 'todo', element: <Todo /> },
          { path: 'firebase', element: <Firebase /> },
          { path: 'supabase', element: <Supabase /> },
          { path: 'supabase/write', element: <NoteWrite /> },
          { path: 'supabase/edit', element: <NoteEdit /> },
          { path: 'weather', element: <Weather /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
