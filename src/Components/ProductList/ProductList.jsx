import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductSummary from '../ProductSummary/ProductSummary';
import LoadingNotice from '../LoadingNotice/LoadingNotice';
import ErrorNotice from '../ErrorNotice/ErrorNotice';

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
      <section className="product-list--container">
        {this.props.isLoading 
          ? <LoadingNotice />
          : this.props.error
            ? <ErrorNotice />
              : this.props.productCollection && this.props.productCollection.length 
                ? this.props.productCollection.map(product => (
                    <div className="product-list--item" key={product.MoonpigProductNo} >
                      <Link to={`/details/${product.MoonpigProductNo}`}  >
                        <ProductSummary product={product} />
                      </Link>
                    </div>
                  ))
                : "No products were found"}
      </section>
    );
  }
};