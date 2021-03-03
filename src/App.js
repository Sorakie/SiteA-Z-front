import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import Log from './Components/Log.jsx';
import Home from './Components/Home.jsx';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Log} />
        <Route path="/Home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
