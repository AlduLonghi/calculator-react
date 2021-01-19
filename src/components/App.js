import { Route, Switch } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import '../style/App.css';

const App = () => (
  <Switch>
    <Route path="/" component={Calculator} />
  </Switch>
);

export default App;
