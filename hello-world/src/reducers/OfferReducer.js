const offerReducerDefaultState = [];

export default (state = offerReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OFFER':
            return [
                ...state,
                action.offer
            ];
            case 'GET_OFFER':
                return action.offer;
            default:
                return state;
        }
    };
