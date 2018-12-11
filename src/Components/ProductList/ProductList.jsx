import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductSummary from '../ProductSummary/ProductSummary';

import './ProductList.css';

export default class ProductList extends React.PureComponent {

  static propTypes = {
    getProducts: PropTypes.func.isRequired,
    productCollection: PropTypes.arrayOf(PropTypes.any),
    isLoading: PropTypes.bool,
    error: PropTypes.object
  };

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="product-list--container">
        {this.props.isLoading 
          ? "Loading, please wait..." 
          : this.props.error
            ? "An error occurred"
              : this.props.productCollection && this.props.productCollection.length 
                ? this.props.productCollection.map(product => (
                    <div className="product-list--item" key={product.ProductId} >
                      <Link to={`/details/${product.ProductId}`}  >
                        <ProductSummary product={product} />
                      </Link>
                    </div>
                  ))
                : "No products were found"}
      </div>
    );
  }
};