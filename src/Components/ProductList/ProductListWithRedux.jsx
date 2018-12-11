import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getProducts } from '../../redux/actions';

const mapStateToProps = state => ({
  productCollection: state.products.productCollection,
  isLoading: state.products.isLoading,
  error: state.products.error
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);