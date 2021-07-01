const initialState = []
    


   

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SUPPLIER':
            return [
                ...state,
                action.supplier
            ];
            case 'GET_SUPPLIER':
                return action.supplier;
                
            default:
                return state;
        }
    };
