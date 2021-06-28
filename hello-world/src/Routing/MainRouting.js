import React from 'react';
import {Route,BrowserRouter as Router}  from 'react-router-dom'

import DefaultDashboard from '../components/DefaultDashboard'
import Header from '../components/Farmer/Header'
import Login from '../components/Login&Registration/Login'
import FarmerSignup  from '../components/Login&Registration/FarmerSignup'


 const MainRouting = (

  <div>
    <Router>
  
      <Route  exact path="/"  component={DefaultDashboard}/>
      <Route  exact path="/user/login"  component={Login}/>
      <Route  exact path="/user/registration"  component={FarmerSignup}/>
      <Route  exact path="/user/farmer"  component={Header}/>
   
  </Router>


 </div>   


);

export default MainRouting
