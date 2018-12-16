import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ProductListingsPage from '../../Pages/ProductListingsPage/ProductListingsPage';
import ProductDetailsPage from '../../Pages/ProductDetailsPage/ProductDetailsPage';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={ProductListingsPage} />
      <Route path="/details/:mpProductId" component={ProductDetailsPage} />
    </div>
  </Router>
);

export default AppRouter;