import * as React from 'react';
import CardList from '../../Components/CardList';

export default class CardListingsPage extends React.PureComponent {

  render() {
    return (
      <div>
        This is the card listings page
        <CardList />
      </div>
    );
  }
};