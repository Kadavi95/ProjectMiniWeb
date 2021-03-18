import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import Buttons from '../Buttons'

const Products = () => {
  return (
    <Router>
     <Buttons/>
        <Switch>
            <Route path = '/products/szczepienia' exact={true}/>
            <Route/>
            <Route/>
        </Switch>
    </Router>
  );
};

export default Products;
