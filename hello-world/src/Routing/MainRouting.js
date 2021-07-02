import React from 'react';
import {Route,BrowserRouter as Router}  from 'react-router-dom'

import DefaultDashboard from '../components/DefaultDashboard'
import Nav from '../components/Farmer/Nav'
import Login from '../Service/Login&Registration/Login'

import AddFarmer  from '../Service/Login&Registration/AddFarmer'
import AddRetailer from '../Service/Login&Registration/AddRetailer'
import AddSupplier  from '../Service/Login&Registration/AddSupplier'

import { Redirect } from 'react-router-dom';
import FarmerDash from '../components/Farmer/FarmerDash';
import RetailerDash from '../components/Retailer/RetailerDash';
import SupplierDash from '../components/Supplier/SupplierDash';

import AddComplaint from '../Service/Complaints/AddComplaint';
import AddAdvertaise from '../Service/Posts/AddAdvertaise';
import AddOffer from '../Service/Offers/AddOffer';
import NotFound from '../components/NotFound';

 const MainRouting = (

  <div>
    <Router>

      <Route  exact path="/"  component={DefaultDashboard}/>


      <Route  exact path="/user/login"  component={Login}/>
      
   
   
    
      

      <Route  exact path="/user/farmer"  component={FarmerDash}/>
      <Route  exact path="/user/retailer"  component={RetailerDash}/>
      <Route  exact path="/user/supplier"  component={SupplierDash}/>







      <Route  exact path="/user/farmer/addcomplaint"  component={AddComplaint}/>
      <Route  exact path="/user/supplier/addpost"  component={AddAdvertaise}/>
      <Route  exact path="/user/retailer/addoffer"  component={AddOffer}/>


  </Router>


 </div>   


);

export default MainRouting
