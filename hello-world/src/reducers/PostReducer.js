const postReducerDefaultState = [];
export default (state = postReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ADVERTAISE':
            return [
                ...state,
                action.advertaise
            ];
            case 'GET_ADVERTAISE':
                return action.advertaise;
            default:
                return state;
        }
    };