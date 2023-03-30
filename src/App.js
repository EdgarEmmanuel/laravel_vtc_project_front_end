import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

//imoprt Route
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import PassengerLogin from './pages/passengerLogin';
import NavbarTop from './pages/home/NavbarTop';
import Driver from './pages/driver';
import DriverRegister from './pages/driverRegister/DriverRegister';
import DriverAssociateRegister from './pages/driverRegister/register/DriverAssociateRegister';
import DriverPrincipalRegister from './pages/driverRegister/register/DriverPrincipalRegister';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavbarTop/>
        <Switch>
          <Route exact path="/passenger/register">
            <PassengerLogin/>
          </Route>
          <Route exact path="/driver/register">
            <DriverRegister/>
          </Route>
          <Route exact path="/driver/associate/register">
            <DriverAssociateRegister/>
          </Route>
          <Route exact path="/driver/principal/register">
            <DriverPrincipalRegister/>
          </Route>
          <Route exact path="/driver">
            <Driver/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
