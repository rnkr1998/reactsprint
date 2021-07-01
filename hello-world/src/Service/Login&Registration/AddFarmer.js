import React from 'react';
import FarmerSignUp from './FarmerSignup';
import { connect } from 'react-redux';
import { addFarmer } from '../../actions/farmer';

const AddFarmer = (props) => (
   
        <div>
        <FarmerSignUp
        onSubmitFarmer={(farmer) => {
                props.dispatch(addFarmer(farmer));
               // props.history.push('/');
            }}

        /></div>
);

export default connect()(AddFarmer);
