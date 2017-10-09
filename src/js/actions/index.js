export const setDurationAtHalfSec = isRevertDirection =>
    ({
        type: 'HALF_SEC',
        payload: isRevertDirection ? '' : ''
    });

export const setDurationAtTwoSec = isRevertDirection =>
    ({
        type: 'TWO_SEC',
        payload: isRevertDirection ? '' : ''
    });

export const setDurationAtSixSec = isRevertDirection =>
    ({
        type: 'SIX_SEC',
        payload: isRevertDirection ? '' : ''
    });

export const setDurationAtEightSec = isRevertDirection =>
    ({
        type: 'EIGHT_SEC',
        payload: isRevertDirection ? '' : ''
    });

export const handleChangeBackgroundMode = () =>
    ({
        type: 'BACKGROUND_SWITCH_MODE'
    });
