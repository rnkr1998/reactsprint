import React from 'react';
import ReactDOM from 'react-dom';
//import MainRouting from './Routing/MainRouting'
import AddComplaint from './Service/Complaints/AddComplaints';
//import ComplaintForm from './Service/Complaints/ComplaintForm';
//import SignInSide from './components/Login&Registration/Login';
//import SupplierSignUp from './components/Login&Registration/SupplierSignUp';
//import DefaultDashboard from './components/DefaultDashboard';
//import Header from './components/Farmer/Header';
//import Farmer from './components/Farmer/Farmer';
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import ComplaintReducer from './reducers/ComplaintReducer';
import thunk from 'redux-thunk';

const store = createStore(ComplaintReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
<Provider store={store}><AddComplaint/></Provider> 

</React.StrictMode>,
  document.getElementById('root')
);

