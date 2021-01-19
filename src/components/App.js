import { Route, Switch } from 'react-router-dom';
import '../style/App.css';
import Navbar from './shared/Navbar';
import Calculator from './calculator/Calculator';
import Home from './home/Home';
import Quote from './quote/Quote';
import Footer from './shared/Footer';

const App = () => (
  <>
    <Navbar />
    <div className="page-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </div>
    <Footer />
  </>
);

export default App;
