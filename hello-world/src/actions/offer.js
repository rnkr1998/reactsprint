import axios from '../axios/axios';

const _addOffer = (offer) => ({
    type: 'ADD_OFFER',
    offer
});

export const addOffer = (offerData = {
        productName:'',
        productPrice:'',
        productDiscount:'',
        productQuantity:'',
        farmingTips:'',
        retailer:{
            retailerId:''
        }
    

	
    
    
}) => {
    return (dispatch) => {
    
     
        const offer = {
 
            

            productName:offerData.productName,
            productPrice:offerData.productPrice,
            productDiscount:offerData.productDiscount,
            productQuantity:offerData.productQuantity,
            farmingTips:offerData.farmingTips,
            retailer:
            {
                retailerId:offerData.retailerId
            }

            }
          

        return axios.post('offer/add',offer ).then(result => {
            dispatch(_addOffer(result.data));
            console.log("Success");
        });
    };
};








const _getComplaint = (complaint) => ({
    type: 'GET_COMPLAINT',
    complaint
});

export const getComplaints = () => {
    return (dispatch) => {
        return axios.get('complaint').then(result => {
            const complaint = [];

            result.data.forEach(item => {
                complaint.push(item);
            });

            dispatch(_getComplaint(complaint));
        });
    };
};
