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
