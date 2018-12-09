import * as React from 'react';
import PropTypes from 'prop-types';
import CardSummary from '../CardSummary/CardSummary';

import './CardList.css';

export default class CardList extends React.PureComponent {

  static propTypes = {
    getCards: PropTypes.func.isRequired,
    cardCollection: PropTypes.arrayOf(PropTypes.any),
    isLoading: PropTypes.bool,
    error: PropTypes.object
  };

  componentDidMount() {
    this.props.getCards();
  }

  render() {
    return (
      <div className="card-list--container">
        {this.props.isLoading 
          ? "Loading, please wait..." 
          : this.props.error
            ? "An error occurred"
              : this.props.cardCollection && this.props.cardCollection.length 
                ? this.props.cardCollection.map(card => (
                  <div className="card-list--item">
                    <CardSummary card={card} key={card.ProductId} />
                  </div>))
                : "No cards were found"}
      </div>
    );
  }
};