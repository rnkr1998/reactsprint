import React from 'react';
import ReactDOM from 'react-dom';
//import MainRouting from './Routing/MainRouting'
import AddComplaint from './Service/Complaints/AddComplaint';
import AddOffer from './Service/Offers/AddOffer';
import AddAdvertaise from './Service/Posts/AddAdvertaise';
//import ComplaintForm from './Service/Complaints/ComplaintForm';
//import SignInSide from './components/Login&Registration/Login';
//import SupplierSignUp from './components/Login&Registration/SupplierSignUp';
//import DefaultDashboard from './components/DefaultDashboard';
//import Header from './components/Farmer/Header';
//import Farmer from './components/Farmer/Farmer';
import App from './Service/Complaints/ViewComplaint';
import ViewComplaint from './Service/Complaints/ViewComplaint';
import ViewOffer from './Service/Offers/ViewOffer';
import ViewAdvertaise from './Service/Posts/ViewAdvertaise';
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import ComplaintReducer from './reducers/ComplaintReducer';
import thunk from 'redux-thunk';
import getStore from './store/store'
//
//<Provider store={store}><AddComplaint/><AddOffer/><AddAdvertaise/></Provider> 

const store=getStore();
ReactDOM.render(
  <React.StrictMode>
<Provider store={store}><ViewAdvertaise/></Provider> 
</React.StrictMode>,
  document.getElementById('root')
);

