import React from 'react';
import ReactDOM from 'react-dom';
import MainRouting from './Routing/MainRouting'
import AddComplaint from './Service/Complaints/AddComplaint';
import AddOffer from './Service/Offers/AddOffer';
import AddAdvertaise from './Service/Posts/AddAdvertaise';
//import ComplaintForm from './Service/Complaints/ComplaintForm';
//import SignInSide from './components/Login&Registration/Login';
//import SupplierSignUp from './components/Login&Registration/SupplierSignUp';
import RetailerSignUp from './Service/Login&Registration/RetailerSignUp';
import FarmerSignUp from './Service/Login&Registration/FarmerSignup'
import AddFarmer from './Service/Login&Registration/AddFarmer';
import DefaultDashboard from './components/DefaultDashboard';
import Nav from './components/Farmer/Nav';
//import Farmer from './components/Farmer/Farmer';
import App from './App';
import ViewComplaint from './Service/Complaints/ViewComplaint';
import ViewOffer from './Service/Offers/ViewOffer';
import ViewAdvertaise from './Service/Posts/ViewAdvertaise';
import { Provider } from 'react-redux';
import FarmerDash from './components/Farmer/FarmerDash';
import Farmer from './components/Farmer/Farmer';
//import Viewcomplaints from './components/Services/Viewcomplaints';
import getStore from './store/store'
import AddRetailer from './Service/Login&Registration/AddRetailer';
import AddSupplier from './Service/Login&Registration/AddSupplier';
import Login from './Service/Login&Registration/Login';
//
//<Provider store={store}><AddComplaint/><AddOffer/><AddAdvertaise/></Provider> 

const store=getStore();
ReactDOM.render(
  <React.StrictMode>

<Provider store={store}><FarmerDash/></Provider> 
</React.StrictMode>,
  document.getElementById('root')
);

