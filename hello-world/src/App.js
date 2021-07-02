import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import DefaultDashboard from './components/DefaultDashboard';
  import MainRouting from './Routing/MainRouting';

function App()
{
  
    return(
        <div>
          {MainRouting}
       
      </div>
    )
}
        
    




export default App;