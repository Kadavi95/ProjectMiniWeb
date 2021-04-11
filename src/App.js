import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import homePage from "./Components/pages/homePage";
import contactus from "./Components/pages/contactUs";
import Appointment from "./Components/pages/appointment";
import AboutUs from "./Components/pages/aboutUs";
import ErrorComponent from "./Components/pages/ErrorComponent";
import products from "./Components/pages/products";
import Cms from "./Components/pages/Cms";
import Vaccinate from "./Components/pages/innerPages/Vaccinate";
import Treatment from "./Components/pages/innerPages/Treatment";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  // isTrue ? 'true' : 'false'

  // if(isTrue){
  //   'treue'
  // } else{
  //   fa;se
  // }

  // isTrue && 'true'

  // if(istrue){
  //   'true'
  // }

  return (
    <>
      <div className={isDarkMode && "darkMode"}>
        <Router>
          <Navigation isDarkMode={isDarkMode} handleDarkMode={toggleDarkMode} />
          <Switch>
            <Route path="/" exact={true} component={homePage}></Route>
            <Route path="/aboutUs" exact={true} component={AboutUs} />
            <Route path="/contactUs" exact={true} component={contactus}></Route>
            <Route path="/products" exact={true} component={products} />
            <Route
              path="/products/vaccinate"
              exact={true}
              component={Vaccinate}
            />
            <Route
              path="/products/treatment"
              exact={true}
              component={Treatment}
            />
            <Route path="/cms" exact={true} component={Cms} />
            <Route path="/appointment" exact={true} component={Appointment} />
            <Route component={ErrorComponent} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
};

export default App;
