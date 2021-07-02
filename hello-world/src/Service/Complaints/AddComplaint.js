import React from 'react';
import ComplaintForm from './ComplaintForm';
import { connect } from 'react-redux';
import { addComplaint } from '../../actions/complaint';
import {ViewComplaint} from './ViewComplaint';
const AddComplaint = (props) => (
   
        <div >
        <ComplaintForm
        onSubmitComplaint={(complaints) => {
                props.dispatch(addComplaint(complaints));
               // props.history.push('/');
            }}

        /></div>
);

export default connect()(AddComplaint);
