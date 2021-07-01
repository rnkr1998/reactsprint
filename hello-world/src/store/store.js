import { createStore, applyMiddleware,combineReducers } from "redux";
import ComplaintReducer from '../reducers/ComplaintReducer';
import OfferReducer from '../reducers/OfferReducer';
import PostReducer from '../reducers/PostReducer';
import FarmerReducer from '../reducers/FarmerReducer';
import RetailerReducer from '../reducers/RetailerReducer';
import SupplierReducer from '../reducers/SupplierReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
const initalState = {

}
const masterReducer = combineReducers(
    {
      Offer:OfferReducer,
      Post:PostReducer,
      Complaint:ComplaintReducer,
      Farmer:FarmerReducer,
      Supplier:SupplierReducer,
      Retailer:RetailerReducer
    }
  );
export default () => {
    return createStore(masterReducer,initalState, composeWithDevTools(applyMiddleware(thunk)));
};