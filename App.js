import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import { Provider } from "mobx-react";

import stores from "./stores";

import AppNavigator from './components/appNavigator';

// const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  
  render() {
    return (
        <Provider {...stores}>
            <AppNavigator/>
        </Provider>
    );
  }
}
