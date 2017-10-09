import React, { Component } from 'react';
import { RotatedLogo, StateManagers, StoreViewer } from './components';
import lightConnect from './connect';
import { setDurationAtHalfSec,
    setDurationAtTwoSec,
    setDurationAtSixSec,
    setDurationAtEightSec } from './actions';
import '../css/App.css';

const mapStateToProps = store => {
  console.log(store); // state
}

const mapDispatchToProps = dispatch => {
  return {
    handleChangeDuration: seconds => {
        switch(seconds) {
            case '0.5s':
                dispatch(setDurationAtHalfSec());
                break;
            case '2s':
                dispatch(setDurationAtTwoSec());
                break;
            case '6s':
                dispatch(setDurationAtSixSec());
                break;
            case '8s':
                dispatch(setDurationAtEightSec());
                break;
            default:
                return;
        }
    }
  }
}

class App extends Component {
    handleChangeDuration = seconds => {
        console.warn(seconds);
    }

    render() {
        return (
            <div>
                <RotatedLogo
                    animatonClass={`App-logo-two-sec`}
                />
                <StateManagers
                    handleChangeDuration={this.handleChangeDuration}
                />
                <StoreViewer />
            </div>
        );
    }
}

export default lightConnect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
