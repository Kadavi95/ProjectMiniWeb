import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import Buttons from '../Buttons'
import Vaccinate from './innerPages/Vaccinate'
import Treatment from "./innerPages/Treatment";

const Products = () => {
  return (
    <Router>
     <Buttons/>
        <Switch>
            <Route path = '/vaccinate' exact={true} component = {Vaccinate}/>
            <Route path = '/treatment' exact = {true} component={Treatment}/>
            <Route to ='/appoint'/>
        </Switch>
    </Router>
  );
};

export default Products;
