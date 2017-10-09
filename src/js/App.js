import React, { Component } from 'react';
import propTypes from 'prop-types';
import { RotatedLogo, StateManagers, StoreViewer } from './components';
import lightConnect from './connect';
import { setDurationAtHalfSec,
    setDurationAtTwoSec,
    setDurationAtSixSec,
    setDurationAtEightSec,
    handleChangeBackgroundMode } from './actions';
import '../css/App.css';

const mapStateToProps = store => {
    return {
        animationClass: store.animatonClass,
        isBackGroundEmpty: store.isBackGroundEmpty
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChangeDuration: seconds => {
            switch(seconds) {
            case '0.5':
                dispatch(setDurationAtHalfSec());
                break;
            case '2':
                dispatch(setDurationAtTwoSec());
                break;
            case '6':
                dispatch(setDurationAtSixSec());
                break;
            case '8':
                dispatch(setDurationAtEightSec());
                break;
            default:
                return;
            }
        },
        handleChangeBackgroundMode: () => dispatch(handleChangeBackgroundMode())
    };
};

class App extends Component {
    render() {
        return (
            <div className={this.props.isBackGroundEmpty ? 'app-container' : 'app-container background-container'}>
                <RotatedLogo
                    animatonClass={this.props.animationClass}
                />
            <div className={'additional-elements'}>
                    <StateManagers
                        handleChangeDuration={this.props.handleChangeDuration}
                        handleChangeBackgroundMode={this.props.handleChangeBackgroundMode}
                    />
                    <StoreViewer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    handleChangeDuration: propTypes.func,
    handleChangeBackgroundMode: propTypes.func,
    animationClass: propTypes.string,
    isBackGroundEmpty: propTypes.bool
};

export default lightConnect(mapStateToProps, mapDispatchToProps)(App);
