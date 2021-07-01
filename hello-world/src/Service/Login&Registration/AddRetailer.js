import React from 'react';
import RetailerSignUp from './RetailerSignUp';
import { connect } from 'react-redux';
import { addRetailer } from '../../actions/retailer';

const AddRetailer = (props) => (
   
        <div>
        <RetailerSignUp
        onSubmitRetailer={(retailer) => {
                props.dispatch(addRetailer(retailer));
               // props.history.push('/');
            }}

        /></div>
);
export default connect()(AddRetailer);
