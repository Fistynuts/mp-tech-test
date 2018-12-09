import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardListingsPage from '../../Pages/CardListingsPage/CardListingsPage';
import CardDetailsPage from '../../Pages/CardDetailsPage/CardDetailsPage';

export default class AppRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={CardListingsPage} />
          <Route path='/details' component={CardDetailsPage} />
        </div>
      </Router>
    );
  }
};