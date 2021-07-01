import axios from '../axios/axios';
//import axios from 'axios';
const _addFarmer = (farmer) => ({
    type: 'ADD_FARMER',
    farmer
});

export const addFarmer = (farmerData = {
    farmerName: '',
    farmerEmail:'',
    farmerAge: '',
    farmerNumber: '',
    farmerAddress:''
    
}) => {
    return (dispatch) => {
    
     
        const farmer= {
 
            
            farmerName: farmerData.farmerName,
            farmerEmail:farmerData.farmerEmail,
            farmerAge: farmerData.farmerAge,
            farmerNumber:farmerData. farmerNumber,
            farmerAddress:farmerData.farmerAddress

            }
          

        return axios.post('farmer/add', farmer).then(result => {
            dispatch(_addFarmer(result.data));
        });
    };
};








const _getFarmer = (farmer) => ({
    type: 'GET_FARMER',
    farmer
});

export const getFarmer = () => {
    return (dispatch) => {
        console.log("Reached here");
        return axios.get("/farmer/getfarmer/all").then(result => {
        //.then(response => {
           // return JSON.parse(response.data)
       // })
           const farmer = [];
            

           result.data.forEach(item => {
              farmer.push(item);
           });

            dispatch(_getFarmer(farmer));
        });
    };
};


