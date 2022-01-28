import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
        <h1 className="store-header">Dragon Inn Chinese Restaurant</h1>
        <div className="nav-links">

        Website Under Construction <br/>
        Please Return Soon!
        
        </div>
      </nav>
      </header>

    
    </div>
   
  );
}

export default App;
