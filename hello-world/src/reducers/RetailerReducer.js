const initialState = []
    


   

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RETAILER':
            return [
                ...state,
                action.retailer
            ];
            case 'GET_RETAILER':
                return action.retailer;
                
            default:
                return state;
        }
    };
