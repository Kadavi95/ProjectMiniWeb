import React from "react";
import '../../sass/products.scss'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import Buttons from '../Buttons';
import Vaccinate from './innerPages/Vaccinate';
import Treatment from "./innerPages/Treatment";
import Appointments from './innerPages/Appointments';

const Products = () => {
  return (
    <div className='producstMainContainer'>
    <Router>
     <Buttons/>
        <Switch>
            <Route path = '/vaccinate' exact={true} component = {Vaccinate}/>
            <Route path = '/treatment' exact = {true} component={Treatment}/>
            <Route path ='/appointments' exact={true} component={Appointments}/>

        </Switch>
    </Router>
    </div>
  );
};

export default Products;
