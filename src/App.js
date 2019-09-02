import React, { Fragment } from 'react';
import './App.css';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Posts></Posts>
      </Fragment>
    </Provider>
  );
}

export default App;
