import { Link } from 'react-router-dom';
import '../../style/App.css';

const Navbar = () => (
  <div>
    <h1>
      Math magicians
    </h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
