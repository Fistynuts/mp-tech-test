import * as React from 'react';
import PropTypes from 'prop-types';

import "./ProductSummary.css";

export default class ProductSummary extends React.PureComponent {

  static propTypes = {
    product: PropTypes.object.isRequired
  };
  
  render() {
    return (
      <div className="product-summary--container">
        <img className="product-summary--image" src={this.props.product.ProductImage.Link.Href} alt={this.props.product.Title} />
      </div>
    );
  }
};