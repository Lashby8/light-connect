import { SET_ANIMATION_DURATION, BACKGROUND_SWITCH_MODE } from '../constants';

const initialState = {
    animatonClass: '',
    isBackGroundEmpty: true
};

export default function mainReducer(state = initialState, action) {
	const { type, payload } = action;

    switch(type) {
    case SET_ANIMATION_DURATION:
        return Object.assign(state, {animatonClass: payload});
    case BACKGROUND_SWITCH_MODE: {
        const prevValueOfBgroundMode = state.isBackGroundEmpty;

        return Object.assign(state, {isBackGroundEmpty: !prevValueOfBgroundMode});
    }
    default:
        return state;
    }
}
