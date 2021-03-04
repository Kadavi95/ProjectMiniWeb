import React from 'react';
import {BrowserRouter as Router, Switch, Link, Navlink} from 'react-router-dom';

import Navigation from './Components/Navigation';

const App = () => {
  return ( <> 
  <Router>
    <Navigation/>
    <Switch>

    </Switch>
  </Router>
  </> );
}
 
export default App;