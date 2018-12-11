import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductListingsPage from '../../Pages/ProductListingsPage/ProductListingsPage';
import ProductDetailsPage from '../../Pages/ProductDetailsPage/ProductDetailsPage';

export default class AppRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={ProductListingsPage} />
          <Route path='/details/:productId' component={ProductDetailsPage} />
        </div>
      </Router>
    );
  }
};