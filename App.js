/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import reducers from './src/reducers';

import Login from './src/screens/Login';
import Messages from './src/screens/Messages';

let RootStack = createStackNavigator({
  Login: Login,
  Messages: Messages
});

let Navigation = createAppContainer(RootStack);

console.ignoredYellowBox = true;

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
        <Navigation />
    </Provider>
  );
};

export default App;