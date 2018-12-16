import * as React from 'react';
import PropTypes from 'prop-types';
import LoadingNotice from '../LoadingNotice/LoadingNotice';
import ErrorNotice from '../ErrorNotice/ErrorNotice';

import './ProductDetails.css';

export default class ProductDetails extends React.PureComponent {

  static propTypes = {
    mpProductId: PropTypes.string.isRequired,
    detailProduct: PropTypes.objectOf(PropTypes.any),
    getProductDetails: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.objectOf(PropTypes.any)
  };
  
  static defaultProps = {
    detailProduct: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.props.getProductDetails(this.props.mpProductId);
  }

  render() {
    // TODO: Possibly break the product detail out into another component
    // Also it'd be nice to have a meaningful ALT text for the image.
    return (
      this.props.detailProduct 
        ? ( 
          <section className="product-details--container">
            <div className="product-details--image-container">
              <img 
                src={this.props.detailProduct.ImageUrls[0].ImageUrl} 
                alt={this.props.detailProduct.Title} 
                className="product-details--image" />
            </div>
            <section className="product-details--detail-container">
              <h1>{this.props.detailProduct.Title}</h1>
              <button type="button" className="product-details--buy-button">Buy Me</button>
            </section>
          </section> 
          )
        : this.props.isLoading || !this.props.error
        ? <LoadingNotice />
        : <ErrorNotice />
    );
  }
}