# Light connect

This is a demo of usage of simplify decorator `connect()` - analogue of `connect` function from [react-redux] (Official React bindings for Redux).

The [connect] function also has simple realisation of memoization through the state of wrapper component. Thus, connect function returns a Wrapper-component, which put redux store on the state and shallow compare this state with Redux store from context, when state is changed. You also can use Lodash's [.isEqual] or whatever you want to compare memoized state and new state from context.

### Installation

Light connect requires [Node.js](https://nodejs.org/) >= 6 to run.

Install the dependencies and start the app with [npm] or [yarn]

```sh
$ cd light-connect
$ npm install
$ npm start
```

### Usage

`Connect()` function is a [Higher-order function], and you shuold pass **mapStateToProps** and  **mapDispatchToProps** (optionally) and then call `connect]()` again with Wrapped component as a argument.

### Example

```javascript
import React from 'react';
import { connect } from 'light-connect';
import { someAction, anotherAction } from 'actions';

const mapStateToProps = store => ({
    someImportantFieldInStore: store.importantField
});

// you can also use Redux's bindActionCreators here
const mapDispatchToProps = dispatch => ({
    someAction = () => dispatch(someAction()),
    anotherAction = () => dispatch(anotherAction())
});

// now you'll get someImportantFieldInStore as a prop and both of your actions'll change Redux store
class WrappedComponent extends React.Component {
    componentDidMount() {
        this.props.someAction();
    }
    render() {
        return (
            <div>
                <div>{Hello,world}</div>
                <span>{this.props.someImportantFieldInStore}</span>
            </div>
        )
    }
}
export connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
```

[connect]: <https://github.com/Lashby8/light-connect/blob/master/src/js/connect.js>
[react-redux]: <https://github.com/reactjs/react-redux>
[node.js]: <http://nodejs.org>
[npm]: <https://www.npmjs.com/>
[yarn]: <https://yarnpkg.com/lang/en/>
[.isEqual]:<https://lodash.com/docs/4.17.4#isEqual>
[Higher-order function]: <https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750>
