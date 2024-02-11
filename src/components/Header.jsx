import { Link } from 'react-router-dom'
import LOGO from '/react-icon.svg'
import PHOTO from '/photo.jpg'

export default function Header() {
  const basicMenu = [
    { id: 1, name: 'card Components', to: '/basic/card' },
    { id: 2, name: 'hoooks', to: '/basic/hooks' },
    { id: 3, name: 'state', to: '/basic/state' },
    { id: 4, name: 'useContext', to: '/basic/useContext' },
  ]
  const tutorialMenu = [
    { id: 1, name: 'movie', to: '/tutorial/movie' },
    { id: 2, name: 'todo', to: '/tutorial/todo' },
    { id: 3, name: 'firebase', to: '/tutorial/firebase' },
    { id: 4, name: 'supabase', to: '/tutorial/supabase' },
    { id: 5, name: 'weather', to: '/tutorial/weather' },
  ]

  return (
    <header className='p-8 flex flex-col h-screen fixed top-0 left-0 w-64 border-r'>
      <div className='flex items-center gap-2 mb-4'>
        <div className='w-12 rounded-full overflow-hidden'>
          <img src={PHOTO} alt='' />
        </div>
        <div>
          <p className='font-bold'>React</p>
          <p className='text-xs text-gray-600'>javsscript library</p>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <div className='text-xl my-5'>
              <Link to='/'>Home</Link>
            </div>
          </li>
          <li>
            <div className='text-xl my-5'>
              <span>Basic</span>
            </div>
            <ul>
              {basicMenu.map(item => (
                <li key={item.id}>
                  <Link className='sub_menu' to={item.to}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className='text-xl my-5'>
              <span>Tutorial</span>
            </div>
            <ul>
              {tutorialMenu.map(item => (
                <li key={item.id}>
                  <Link className='sub_menu' to={item.to}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      <div className='mt-auto flex items-center gap-1'>
        <img className='w-5' src={LOGO} alt='react logo' />
        <span className='text-sm text-cyan-400'>
          react-tutorial {new Date().getFullYear()}
        </span>
      </div>
    </header>
  )
}
