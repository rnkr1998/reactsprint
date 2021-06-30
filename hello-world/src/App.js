import React from 'react';
import { connect } from 'react-redux';

import ViewComplaint from './Service/Complaints/ViewComplaint';
import ViewOffer from './Service/Offers/ViewOffer';
import ViewAdvertaise from './Service/Posts/ViewAdvertaise';
const App = () => (
  
    <div>
       <h1>Offers</h1>
       <ViewOffer/>

       <h1>Complaints</h1>
       <ViewComplaint/>

       <h1>Posts</h1>
       <ViewAdvertaise/>

    </div>
);




export default App;