import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import AppRouter from './Components/AppRouter/AppRouter';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
