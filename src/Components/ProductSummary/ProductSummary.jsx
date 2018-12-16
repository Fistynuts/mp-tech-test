import * as React from 'react';
import PropTypes from 'prop-types';

import './ProductSummary.css';

export default class ProductSummary extends React.PureComponent {

  static propTypes = {
    product: PropTypes.objectOf(PropTypes.any).isRequired
  };
  
  render() {
    const { product } = this.props;

    return (
      <div className="product-summary--container">
        <img className="product-summary--image" src={product.ProductImage.Link.Href} alt={product.Title} />
      </div>
    );
  }
}