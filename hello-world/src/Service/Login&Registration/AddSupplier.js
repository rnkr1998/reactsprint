import React from 'react';
import SupplierSignUp from './SupplierSignUp';
import { connect } from 'react-redux';
import { addSupplier } from '../../actions/supplier';

const AddSupplier = (props) => (
   
        <div>
        <SupplierSignUp
        onSubmitSupplier={(supplier) => {
                props.dispatch(addSupplier(supplier));
               // props.history.push('/');
            }}

        /></div>
);
export default connect()(AddSupplier);
