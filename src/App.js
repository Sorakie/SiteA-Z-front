import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import Log from './Components/Log.jsx';
import Home from './Components/Home.jsx';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Log />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
