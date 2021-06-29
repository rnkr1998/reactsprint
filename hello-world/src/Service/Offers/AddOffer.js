import React from 'react';
import OfferForm from './OfferForm';
import { connect } from 'react-redux';
import { addOffer } from '../../actions/offer';

const AddOffer = (props) => (
   
        <div>
        <OfferForm
        onSubmitOffer={(offer) => {
                props.dispatch(addOffer(offer));
               // props.history.push('/');
            }}

        /></div>
);

export default connect()(AddOffer);
