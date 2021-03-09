import React from 'react';
import {BrowserRouter as Router, Switch, Link, Navlink, Route} from 'react-router-dom';

import Navigation from './Components/Navigation';
import homePage from './Components/pages/homePage';

const App = () => {
  return ( <> 
  <Router>
    <Navigation/>
    <Switch>
      <Route path='/' exact = {true} component={homePage} ></Route>
    </Switch>
  </Router>
  </> );
}
 
export default App;