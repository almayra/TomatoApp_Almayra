/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Appinit from './AppInit';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './src/redux/reducer'
import AppInit from './AppInit'

const App = () => {
  return (
    <>
      <Appinit/>
    </>
  );
};

export default App