const complaintReducerDefaultState = [];

export default (state = complaintReducerDefaultState, action) => {
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
