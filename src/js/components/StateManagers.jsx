import React from 'react';
import propTypes from 'prop-types';

// "dumb" component, but it can calls callbacks, which can mutate Redux-state
const StateManagers = ({ handleChangeDuration, handleChangeBackgroundMode }) => (
    <div className='state-managers'>
        <span>{'Change the duration of animation in Redux store here:'}</span>
        <button onClick={() => handleChangeDuration('0.5s')}>
            <span>
                {'0.5s'}
            </span>
        </button>
        <button onClick={() => handleChangeDuration('2s')}>
            <span>
                {'2s'}
            </span>
        </button>
        <button onClick={() => handleChangeDuration('6s')}>
            <span>
                {'6s'}
            </span>
        </button>
        <button onClick={() => handleChangeDuration('8s')}>
            <span>
                {'8s'}
            </span>
        </button>
        <button onClick={handleChangeBackgroundMode}>
            <span>
                {'Change the background'}
            </span>
        </button>
    </div>
);

StateManagers.propTypes = {
    handleChangeDuration: propTypes.func
};

export default (StateManagers);
