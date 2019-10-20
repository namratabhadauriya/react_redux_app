import React from 'react';
import Component_1 from './components/component_1';
import Component_2 from './components/component_2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="routeMenu">
          <div><Link to="/Home"><h2>Home</h2></Link></div>
          <div><Link to="/Component_1"><h2>Component_1</h2></Link></div>
          <div><Link to="/Component_2"><h2>Component_2</h2></Link></div>
        </div>
        <Route path="/Home" component={this} />
        <Route path="/Component_1" component={Component_1} />
        <Route path="/Component_2" component={Component_2} />
      </Router>
      <h5>This is a react-redux application</h5>
    </div>
  );
}

export default App;
