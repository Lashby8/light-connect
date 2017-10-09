const initialState = {
    animation_class: ''
};

export default function mainReducer(state = initialState, action) {
    switch(action.type) {
    case 'HALF_SEC':
        return Object.assign(state, {a: 'INC'});
    case 'TWO_SEC':
        return Object.assign(state, {a: 'DEC'});
    case 'SIX_SEC':
        return state;
    case 'EIGHT_SEC':
        return state;
    default:
        return state;
    }
}
