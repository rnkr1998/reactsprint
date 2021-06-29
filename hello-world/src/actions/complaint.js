import axios from '../axios/axios';

const _addComplaint = (complaint) => ({
    type: 'ADD_COMPLAINT',
    complaint
});

export const addComplaint = (complaintData = {
    complaintType: '',
    complaintMessage: '',
    complaintOn: '',
    farmer:{
        farmerId:''
    }
    
}) => {
    return (dispatch) => {
    
     
        const complaint = {
 
            

           complaintMessage: complaintData.complaintMessage,
            complaintOn: complaintData.complaintOn,
            complaintType: complaintData.complaintType,
            farmer:
            {
                farmerId:complaintData.farmerId
            }
            

            }
          

        return axios.post('complain/add', complaint).then(result => {
            dispatch(_addComplaint(result.data));
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
