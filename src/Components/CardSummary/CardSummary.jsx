import * as React from 'react';
import PropTypes from 'prop-types';

import "./CardSummary.css";

export default class CardSummary extends React.PureComponent {

  static propTypes = {
    card: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="card-summary--container">
        <img className="card-summary--image" src={this.props.card.ProductImage.Link.Href} alt="Product" />
        <div className="card-summary--title">{this.props.card.Title}</div>
      </div>
    );
  }
};