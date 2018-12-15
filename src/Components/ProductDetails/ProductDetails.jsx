import * as React from 'react';
import PropTypes from 'prop-types';
import LoadingNotice from '../LoadingNotice/LoadingNotice';

import "./ProductDetails.css";

export default class ProductDetails extends React.PureComponent {

  static propTypes = {
    mpProductId: PropTypes.string.isRequired,
    detailProduct: PropTypes.objectOf(PropTypes.any),
    getProductDetails: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.object
  };

  componentDidMount() {
    this.props.getProductDetails(this.props.mpProductId);
  }

  render() {
    return (
      <div className="product-details--container">
        { this.props.detailProduct 
          ? ( 
            <>
              <div className="product-details--image-container">
                <img 
                  src={this.props.detailProduct.ImageUrls[0].ImageUrl} 
                  alt={this.props.detailProduct.Title} 
                  className="product-details--image" />
              </div>
              <div className="product-details--detail-container">
                <h1>{this.props.detailProduct.Title}</h1>
                <button type="button" className="product-details--buy-button">Buy Me</button>
              </div>
            </> )
          : this.props.isLoading 
          ? <LoadingNotice />
          : this.props.error 
          ? "An error occurred"
          : null
        }
      </div>
    );
  }
};