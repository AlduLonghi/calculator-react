import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Calculator from './components/calculator/Calculator';
import Quote from './components/quote/Quote';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/quote" component={Quote} />
  </Switch>
);

export default Routes;
