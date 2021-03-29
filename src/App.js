
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import homePage from './Components/pages/homePage';
import contactus from './Components/pages/contactUs';
import Appointment from './Components/pages/appointment';
import AboutUs from './Components/pages/aboutUs';
import ErrorComponent from './Components/pages/ErrorComponent';
import products from './Components/pages/products';
import Cms from './Components/pages/Cms';

const App = () => {
  return ( <> 
  <Router>
    <Navigation/>
    <Switch>
      <Route path='/' exact = {true} component={homePage} ></Route>
      <Route path='/aboutUs' exact = {true} component = {AboutUs} />
      <Route path='/contactUs' exact = {true} component={contactus} ></Route>
      <Route path='/products' exact = {true} component={products}/>
      <Route path='/vaccinate' exact = {true} component={products}/>
      <Route path='/treatment' exact = {true} component={products}/>
      <Route path='/cms' exact = {true} component={Cms}/>
      <Route path='/appointment' exact = {true} component={Appointment}/>
      <Route component={ErrorComponent} />
    </Switch>
    <Footer></Footer>
  </Router>
  </> );
}
 
export default App;