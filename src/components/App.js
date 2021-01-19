import { Route, Switch } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import '../style/App.css';
import Navbar from './shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={Calculator} />
    </Switch>
  </>
);

export default App;
