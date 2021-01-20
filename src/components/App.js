import { BrowserRouter as Router } from 'react-router-dom';
import '../style/App.css';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Routes from '../Routes';

const App = () => (
  <Router>
    <Navbar />
    <div className="page-container">
      <Routes />
    </div>
    <Footer />
  </Router>
);

export default App;
