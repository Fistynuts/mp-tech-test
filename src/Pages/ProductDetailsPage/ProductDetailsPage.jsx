import * as React from 'react';
import ProductDetails from '../../Components/ProductDetails';

export default class ProductDetailsPage extends React.PureComponent {
  render() {
    return (
      <main>
        <ProductDetails mpProductId={this.props.match.params.mpProductId} />
      </main>
    );
  }
};