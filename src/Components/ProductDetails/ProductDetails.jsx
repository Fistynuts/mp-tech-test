import * as React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends React.PureComponent {

  static propTypes = {
    product: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    return (
      <div>
        {this.props.product.ProductId}
      </div>
    );
  }
};