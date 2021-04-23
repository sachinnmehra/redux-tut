import { addToCart } from "../constant";

const initalState = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case addToCart:
      console.log("reducer", action);
      return [...state, { cardData: action.data }];
    default:
      return state;
  }
}
