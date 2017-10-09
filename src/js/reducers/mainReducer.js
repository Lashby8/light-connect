const initialState = {
    animatonClass: '',
    isBackGroundEmpty: true
};

export default function mainReducer(state = initialState, action) {
    switch(action.type) {
    case 'HALF_SEC':
        return Object.assign(state, {animatonClass: `App-logo-half-sec`});
    case 'TWO_SEC':
        return Object.assign(state, {animatonClass: `App-logo-two-sec`});
    case 'SIX_SEC':
        return Object.assign(state, {animatonClass: `App-logo-six-sec`});
    case 'EIGHT_SEC':
        return Object.assign(state, {animatonClass: `App-logo-eight-sec`});
    case 'BACKGROUND_SWITCH_MODE': {
        const prevValueOfBgroundMode = state.isBackGroundEmpty;

        return Object.assign(state, {isBackGroundEmpty: !prevValueOfBgroundMode});
    }
    default:
        return state;
    }
}
