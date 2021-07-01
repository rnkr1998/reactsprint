import axios from '../axios/axios';
//import axios from 'axios';
const _addRetailer = (retailer) => ({
    type: 'ADD_RETAILER',
    retailer
});

export const addRetailer = (retailerData = {
    retailerName:'',
    retailerNumber:'',
    retailerEmail:'',
    retailerCategory:''

    
}) => {
    return (dispatch) => {
    
     
        const retailer= {
 
            retailerName:retailerData.retailerName,
	        retailerNumber:retailerData.retailerNumber,
	        retailerEmail:retailerData.retailerEmail,
            retailerCategory:retailerData.retailerCategory

            }
          

        return axios.post('retailer/add', retailer).then(result => {
            dispatch(_addRetailer(result.data));
        });
    };
};








const _getRetailer = (retailer) => ({
    type: 'GET_RETAILER',
    retailer
});

export const getRetailer = () => {
    return (dispatch) => {
        console.log("Reached here");
        return axios.get("/retailer/getretailer/all").then(result => {
        //.then(response => {
           // return JSON.parse(response.data)
       // })
           const retailer = [];
            

           result.data.forEach(item => {
              retailer.push(item);
           });

            dispatch(_getRetailer(retailer));
        });
    };
};


