import * as React from 'react';
import ProductDetails from '../../Components/ProductDetails';

export default class ProductDetailsPage extends React.PureComponent {
  render() {
    return (
      <div>
        <ProductDetails productId={this.props.match.params.productId} />
      </div>
    );
  }
};