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









const _getOffer = (offer) => ({
    type: 'GET_OFFER',
    offer
});

export const getOffer = () => {
    return (dispatch) => {
        return axios.get('farmer/showoffer/all').then(result => {
            const offer = [];

            result.data.forEach(item => {
                offer.push(item);
            });

            dispatch(_getOffer(offer));
            console.log("success");
        });
    };
};
