import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import NotFound from './components/NotFound/NotFound.js';
import Display from './components/Display/Display.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/038/038/038" />
        </Route>
        <Route path="/:r/:g/:b" component={Display} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
