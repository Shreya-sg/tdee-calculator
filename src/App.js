import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Homenew from './pages/Homenew';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/tdee-calculator">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/homenew">
            <Homenew />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App; 
