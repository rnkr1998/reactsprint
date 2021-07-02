import axios from '../axios/axios';
//import axios from 'axios';
const _addSupplier = (supplier) => ({
    type: 'ADD_RETAILER',
    supplier
});

export const addSupplier = (supplierData = {
    supplierName: '',
    supplierEmail:'',
    supplierNumber: ''
    
}) => {
    return (dispatch) => {
    
     
        const supplier= {
 
            
            supplierName: supplierData.supplierName,
            supplierEmail:supplierData.supplierEmail,
            supplierNumber: supplierData.supplierNumber,

            }
          

        return axios.post('supplier/add', supplier).then(result => {
            dispatch(_addSupplier(result.data));
        });
    };
};








const _getSupplier = (supplier) => ({
    type: 'GET_SUPPLIER',
    supplier
});

export const getSupplier = () => {
    return (dispatch) => {
        console.log("Reached here");
        return axios.get("/supplier/getsupplier/all").then(result => {
        //.then(response => {
           // return JSON.parse(response.data)
       // })
           const supplier = [];
            

           result.data.forEach(item => {
              supplier.push(item);
           });

            dispatch(_getSupplier(supplier));
        });
    };
};


