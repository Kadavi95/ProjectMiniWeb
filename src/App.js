
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Components/Navigation';
import homePage from './Components/pages/homePage';
import contactus from './Components/pages/contactUs';
import Appointment from './Components/pages/appointment';
import AboutUs from './Components/pages/aboutUs'

const App = () => {
  return ( <> 
  <Router>
    <Navigation/>
    <Switch>
      <Route path='/' exact = {true} component={homePage} ></Route>
      <Route path='/aboutUs' exact = {true} component = {AboutUs} />
      <Route path='/contactUs' exact = {true} component={contactus} ></Route>
      <Route path='/appointment' exact = {true} component={Appointment} />
    </Switch>
  </Router>
  </> );
}
 
export default App;