import { Link } from 'react-router-dom';
import '../../style/App.css';

const Navbar = () => (
  <nav className="d-flex">
    <h1>
      Math Magicians
    </h1>
    <div className="nav-links d-flex">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
