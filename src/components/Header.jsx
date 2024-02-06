import { Link } from "react-router-dom";
import logo from '/logo.jpeg'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to='/'><img src={logo} alt="react logo" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to='/movie'>Movies</Link></li>
          <li><Link to='/todo'>Todo-list</Link></li>
          <li><Link to='/fire'>Firebase Todo</Link></li>
          <li><Link to='/supa'>Supabase Movie</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
          <li><Link to='/tutorial'>Tutorial</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
