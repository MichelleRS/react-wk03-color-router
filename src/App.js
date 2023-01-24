import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Nav from './components/Nav/Nav.js';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/038/038/038" />
        </Route>
        <Route path="/:r/:g/:b" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
