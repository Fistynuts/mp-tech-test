import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';
//import { getProductDetails } from '../../redux/actions';

// const productSelector = (productId, products) => {
//   return products.find(p => p.ProductId === productId);
// };

const mapStateToProps = (state, props) => ({
  product: state.products.detailProduct
});

const mapDispatchToProps = dispatch => ({
  //getProductDetails: productId => dispatch(getProductDetails(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);