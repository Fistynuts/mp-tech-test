import { GET_CARDS, GET_CARDS_COMPLETED } from './actions';

const initialState = {
  isLoading: false,
  cardCollection: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case GET_CARDS_COMPLETED: {
      console.log(action);
      return {
        ...state,
        cardCollection: action.payload.cards.Products,
        resultsCount: action.payload.cards.NumberOfProducts,
        error: action.payload.error,
        isLoading: false
      }
    }
    default: {
      return state;
    }
  }
}