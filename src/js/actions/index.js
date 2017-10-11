import { SET_ANIMATION_DURATION, BACKGROUND_SWITCH_MODE, LOGO_ANIMATION_CLASSNAMES } from '../constants';

export const setAnimationDuration = seconds =>
	({
		type: SET_ANIMATION_DURATION,
		payload: LOGO_ANIMATION_CLASSNAMES[seconds]
	});

export const handleChangeBackgroundMode = () =>
    ({
        type: BACKGROUND_SWITCH_MODE
    });
