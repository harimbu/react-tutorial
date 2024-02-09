import { Link } from 'react-router-dom'
import logo from '/react-icon.svg'
import photo from '/photo.jpg'
import { HiOutlineHome, HiOutlineViewList, HiOutlineFire } from 'react-icons/hi'

export default function Header() {
  return (
    <header>
      <div className='user'>
        <div className='photo'>
          <img src={photo} alt='' />
        </div>
        <div className='text'>
          <p className='name'>React</p>
          <p className='job'>javsscript library</p>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <div className='menu'>
              <HiOutlineHome />
              <Link to='/'>Home</Link>
            </div>
          </li>
          <li>
            <div className='menu'>
              <HiOutlineViewList />
              <span>Basic</span>
            </div>
            <ul>
              <li>
                <Link to='/basic/card'>Card component</Link>
              </li>
              <li>
                <Link to='/basic/hooks'>Hooks</Link>
              </li>
              <li>
                <Link to='/basic/state'>state</Link>
              </li>
              <li>
                <Link to='/basic/usecontext'>useContext()</Link>
              </li>
              <li>
                <Link to='/basic/usecontext'>useContext()</Link>
              </li>
              <li>
                <Link to='/basic/usecontext'>useContext()</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className='menu'>
              <HiOutlineFire />
              <span>Tutorial</span>
            </div>
            <ul>
              <li>
                <Link to='/tutorial/movie'>Movies</Link>
              </li>
              <li>
                <Link to='/tutorial/todo'>Todo-list</Link>
              </li>
              <li>
                <Link to='/tutorial/fire'>Firebase Todo</Link>
              </li>
              <li>
                <Link to='/tutorial/supa'>Supabase Movie</Link>
              </li>
              <li>
                <Link to='/tutorial/weather'>Weather</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className='bottom' to='/'>
        <img src={logo} alt='react logo' /> @react-tutorial
      </div>
    </header>
  )
}
