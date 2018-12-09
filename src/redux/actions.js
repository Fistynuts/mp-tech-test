export const GET_CARDS = "GET_CARDS";
export const GET_CARDS_STARTED = "GET_CARDS_STARTED";
export const GET_CARDS_COMPLETED = "GET_CARDS_COMPLETED";

export const getCards = () => ({
  type: GET_CARDS
});

export const getCardsCompleted = cards => ({
  type: GET_CARDS_COMPLETED,
  payload: {
    cards
  }
});

export const getCardsErrored = error => ({
  type: GET_CARDS_COMPLETED,
  payload: {
    error,
    cards: []
  }
});