import React, { Component } from 'react';
import propTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) =>
    WrappedComponent =>
        class extends Component {
            contextTypes = {
                store: propTypes.object
            }
            render() {
                console.dir(WrappedComponent.context)
                 const newProps = Object.assign(this.props,
                    mapStateToProps(this.context.store),
                    mapDispatchToProps(this.context.store.dispatch));

                return (
                    <WrappedComponent
                        {...newProps}
                    />
                );
            }
        };

export default connect;
