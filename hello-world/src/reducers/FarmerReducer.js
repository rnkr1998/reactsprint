const initialState = []
    


   

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FARMER':
            return [
                ...state,
                action.farmer
            ];
            case 'GET_FARMER':
                return action.farmer;
                
            default:
                return state;
        }
    };
