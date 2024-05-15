import { Link } from 'react-router-dom';
import './navbar.css'; 
import FavList from '../favlist/FavList';
function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/FavList">FavList</Link>
      </nav>
    </div>
  );
}

export default Navbar;
