import React, { Component } from 'react';
import propTypes from 'prop-types';
import { RotatedLogo, StateManagers, StoreViewer } from './components';
import lightConnect from './connect';
import { setAnimationDuration,
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
        handleChangeDuration: seconds => dispatch(setAnimationDuration(seconds)),
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
            <div className='additional-elements'>
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
