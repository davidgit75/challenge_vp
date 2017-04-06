import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import reducer from './reducers';
import Main from './components/Main';
import css from './styles/style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

class Container extends Component {
  // In case you are not going to use redux please remove the provider wraper
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

render(<Container/>, document.getElementById('app'));
