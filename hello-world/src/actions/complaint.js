import axios from '../axios/axios';

const _addComplaint = (complaint) => ({
    type: 'ADD_COMPLAINT',
    complaint
});

export const addComplaint = (complaintData = {
    complaintType: '',
    complaintMessage: '',
    complaintOn: '',
    
}) => {
    return (dispatch) => {
        console.log("post dispatch");
        const complaint = {
          complaintType: complaintData.complaintType,
          complaintMessage:complaintData.complaintMessage,
          complaintOn: complaintData.complaintOn,
        };

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
