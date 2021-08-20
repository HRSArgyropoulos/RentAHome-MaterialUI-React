import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Rent from './components/Rent';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/to-rent">
              <Rent />
            </Route>
            <Route path="/to-host">To Host</Route>
            <Route path="/about">About</Route>
            <Route path="/contact-us">Contact Us</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
