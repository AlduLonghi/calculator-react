import { Link } from 'react-router-dom';
import '../../style/App.css';

const Navbar = () => (
  <nav>
    <h1>
      Math Magicians
    </h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
