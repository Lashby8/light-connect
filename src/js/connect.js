import React, { Component } from 'react';
import propTypes from 'prop-types';
import { isShallowEqual } from './utils';

const connect = (mapStateToProps, mapDispatchToProps) =>
    WrappedComponent => {
        class LightConnector extends Component {
            static displayName = `LightConnector( ${WrappedComponent.name} )`;

            // memoization
            constructor(props, context) {
                super(props, context);
                this.state = {
                    store: Object.assign({}, context.store.getState())
                };
            }

            componentDidMount() {
                this.unsubscribeFromRedux = this.context.store.subscribe(() => {
                    // component will be rerendered only if required fields from the refreshed Store
					// won't be shallow equal with memoized Store

					if (!typeof mapStateToProps === 'function') {
                        // if mapStateToProps isn't passed, we just will compare memoized state and new state from context
                        mapStateToProps = store => store;
                    }

                    if (!isShallowEqual(mapStateToProps(this.context.store.getState()), mapStateToProps(this.state.store))) {
                        this.setState({
                            store: Object.assign({}, this.context.store.getState())
                        });
                    }
                });
            }

            componentWillUnmount() {
                this.unsubscribeFromRedux();
            }

            render() {
                // check - if both functions were passed
                const mapStateToPropsFunc = typeof mapStateToProps === 'function' &&
                    mapStateToProps(this.state.store);
                const mapDispatchToPropsFunc = typeof mapDispatchToProps === 'function' &&
                    mapDispatchToProps(this.context.store.dispatch);

                return (
                    <WrappedComponent
                        {...Object.assign({...this.props},
                            mapStateToPropsFunc,
                            mapDispatchToPropsFunc)
                        }
                    />
                );
            }
        }

        LightConnector.contextTypes = {
            store: propTypes.object
        };

        return LightConnector;
    };

export default connect;
