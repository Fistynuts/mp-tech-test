import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import AppRouter from './Components/AppRouter/AppRouter';
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
};
