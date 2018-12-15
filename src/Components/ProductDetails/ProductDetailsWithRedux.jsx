import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';
import { getProductDetails } from '../../redux/actions';

export const mapStateToProps = state => ({
  detailProduct: state.products.detailProduct,
  isLoading: state.products.isLoading,
  error: state.products.error
});

export const mapDispatchToProps = dispatch => ({
  getProductDetails: mpProductId => dispatch(getProductDetails(mpProductId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);