import * as React from 'react';
import PropTypes from 'prop-types';
import ProductDetails from '../../Components/ProductDetails';

export default class ProductDetailsPage extends React.PureComponent {

  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    return (
      <main>
        <ProductDetails mpProductId={this.props.match.params.mpProductId} />
      </main>
    );
  }
}