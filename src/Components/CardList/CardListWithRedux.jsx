import { connect } from 'react-redux';
import CardList from './CardList';
import { getCards } from '../../redux/actions';

const mapStateToProps = state => ({
  cardCollection: state.cards.cardCollection,
  isLoading: state.cards.isLoading,
  error: state.cards.error
});

const mapDispatchToProps = dispatch => ({
  getCards: () => dispatch(getCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);