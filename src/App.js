import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                  Learn React
                </a>
              </header>
            </Route>
            <Route path="/to-rent">To Rent</Route>
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
