import * as React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        { this.props.detailProduct 
          ? ( 
            <>
              <img src={this.props.detailProduct.ImageUrls[0].ImageUrl} alt={this.props.detailProduct.Title} />
              <h1>{this.props.detailProduct.Title}</h1>
            </> )
          : this.props.isLoading 
          ? "Loading, please wait..." 
          : this.props.error 
          ? "An error occurred"
          : null
        }
      </div>
    );
  }
};