
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Components/Navigation';
import homePage from './Components/pages/homePage';
import contactus from './Components/pages/contactUs';

const App = () => {
  return ( <> 
  <Router>
    <Navigation/>
    <Switch>
      <Route path='/' exact = {true} component={homePage} ></Route>
      <Route path='/contactUs' exact = {true} component={contactus} ></Route>
    </Switch>
  </Router>
  </> );
}
 
export default App;