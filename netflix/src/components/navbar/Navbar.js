import { Link } from 'react-router-dom';
import './navbar.css'; 

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
       {/*} <Link to="/MovieList">MovieList</Link>{*/}
      </nav>
    </div>
  );
}

export default Navbar;
