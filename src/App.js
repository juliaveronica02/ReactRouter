import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1> React Router Nav</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
               <Router>
                <Link to="/">Home</Link>
                </Router>
              </li>
              <li>
               <Router>
                <Link to="/about">About</Link>
                </Router>
              </li>
              <li>
              <Router>
                <Link to="/users">Users</Link>
                </Router>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </div>
  );
}
