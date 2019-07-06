import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes/index';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={this.props.routerHistory} >
          {routes}
        </Router>
      </Provider>
    );
  }
}