import React from 'react';
import propTypes from 'prop-types';

const StateManagers = ({ handleChangeDuration }) => (
    <div>
        <span>{'Change the duration of animation in Redux store here:'}</span>
        <button onClick={() => handleChangeDuration('0.5')}>
            <span>
                {'0.5s'}
            </span>
        </button>
        <button onClick={() => handleChangeDuration('2')}>
            <span>
                {'2s'}
            </span>
        </button>
        <button onClick={() => handleChangeDuration('6')}>
            <span>
                {'6s'}
            </span>
        </button>
        <button onClick={() => handleChangeDuration('8')}>
            <span>
                {'8s'}
            </span>
        </button>
    </div>
);

StateManagers.propTypes = {
    handleChangeDuration: propTypes.func
};

export default StateManagers;
