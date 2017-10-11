import React, { Component } from 'react';
import propTypes from 'prop-types';
import lightConnect from '../connect';

const mapStateToProps = store => ({
    reduxState: store
});

// component also subscribes on Redux-tree
class StoreViewer extends Component {
    render() {
        return(
            <div className='store-viewer'>
                <h3>{'Redux store viewer:'}</h3>
                <span>{JSON.stringify(this.props.reduxState)}</span>
            </div>
        );
    }
}

StoreViewer.propTypes = {
    reduxState: propTypes.object
};

export default lightConnect(mapStateToProps)(StoreViewer);
