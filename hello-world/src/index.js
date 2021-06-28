import React from 'react';
import ReactDOM from 'react-dom';
import MainRouting from './Routing/MainRouting'
//import App from './App';
import SignInSide from './components/Login&Registration/Login';
import SupplierSignUp from './components/Login&Registration/SupplierSignUp';
import DefaultDashboard from './components/DefaultDashboard';
//import Header from './components/Farmer/Header';
import Farmer from './components/Farmer/Farmer';
ReactDOM.render(MainRouting ,
  document.getElementById('root')
);

