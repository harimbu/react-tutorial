import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='p-8 ml-64'>
        <Outlet />
      </main>
    </>
  )
}
