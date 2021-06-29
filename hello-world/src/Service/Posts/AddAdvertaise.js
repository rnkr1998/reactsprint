import React from 'react';
import AdvertaiseForm from './AdvertaiseForm';
import { connect } from 'react-redux';
import { addAdvertaise } from '../../actions/post';

const AddAdvertaise = (props) => (
   
        <div>
        <AdvertaiseForm
        onSubmitAdvertaise={(advertaise) => {
                props.dispatch(addAdvertaise(advertaise));
               // props.history.push('/');
            }}

        /></div>
);

export default connect()(AddAdvertaise);
