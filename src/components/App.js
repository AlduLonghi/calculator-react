import { Route, Switch } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import Home from './home/Home';
import '../style/App.css';
import Navbar from './shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <div className="page-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </div>
  </>
);

export default App;
