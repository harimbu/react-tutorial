import { Link } from 'react-router-dom'
import logo from '/react-icon.svg'
import photo from '/photo.jpg'

export default function Header() {
  return (
    <header>
      <div className='user'>
        <div className='photo'>
          <img src={photo} alt='' />
        </div>
        <div className='text'>
          <p className='name'>탕웨이</p>
          <p className='job'>actress, HK</p>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a>Basic</a>
            <ul>
              <li>
                <Link to='/hooks'>Hooks</Link>
              </li>
              <li>
                <Link to='/state'>state</Link>
              </li>
              <li>
                <Link to='/usecontext'>useContext()</Link>
              </li>
              <li>
                <Link to='/usecontext'>useContext()</Link>
              </li>
              <li>
                <Link to='/usecontext'>useContext()</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/movie'>Movies</Link>
          </li>
          <li>
            <Link to='/todo'>Todo-list</Link>
          </li>
          <li>
            <Link to='/fire'>Firebase Todo</Link>
          </li>
          <li>
            <Link to='/supa'>Supabase Movie</Link>
          </li>
          <li>
            <Link to='/weather'>Weather</Link>
          </li>
        </ul>
      </nav>

      <div className='bottom' to='/'>
        <img src={logo} alt='react logo' /> @react-tutorial
      </div>
    </header>
  )
}
