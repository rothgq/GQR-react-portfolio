import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
 
  return (
  <nav className="sticky-top bg-body-tertiary h-10">
    <ul className="nav justify-content-end">
      <li className="nav-item p-3">
        <Link
          to="/"
        >
          About
        </Link>
      </li>
      <li className="nav-item p-3">
        <Link
          to="/Portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item p-3">
        <Link
          to="/Resume"
        >
          Resume
        </Link>
      </li>
      <li className="nav-item p-3">
        <Link
          to="/Contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;