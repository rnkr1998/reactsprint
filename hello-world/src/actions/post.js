import axios from '../axios/axios';

const _addAdvertaise = (advertaise) => ({
    type: 'ADD_ADVERTAISE',
    advertaise
});

export const addAdvertaise = (advertaiseData = {
    typeOfCrop:'',
    quantity:'',
        supplier:{
            supplierId:''
        }
    
    
}) => {
    return (dispatch) => {
    
     
        const advertaise = {
            typeOfCrop:advertaiseData.typeOfCrop,
            quantity:advertaiseData.quantity,
            
            supplier:
            {
                supplierId:advertaiseData.supplierId
            }

            }
          

        return axios.post('post/add',advertaise).then(result => {
            dispatch(_addAdvertaise(result.data));
            console.log("Success");
        });
    };
};








const _getAdvertaise = (advertaise) => ({
    type: 'GET_ADVERTAISE',
    advertaise
});

export const getAdvertaise = () => {
    return (dispatch) => {
        return axios.get('farmer/getpost/all').then(result => {
            const advertaise = [];

            result.data.forEach(item => {
                advertaise.push(item);
            });

            dispatch(_getAdvertaise(advertaise));
            console.log("success");
        });
    };
};
