const initialState = []
    


   

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMPLAINT':
            return [
                ...state,
                action.complaint
            ];
            case 'GET_COMPLAINT':
                return action.complaint;
                
            default:
                return state;
        }
    };
