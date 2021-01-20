import '../style/App.css';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Routes from '../Routes';

const App = () => (
  <>
    <Navbar />
    <div className="page-container">
      <Routes />
    </div>
    <Footer />
  </>
);

export default App;
